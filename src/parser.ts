import fs from 'fs/promises';
import path from 'path';

export interface UrlViewCount {
  url: string;
  views: number;
}

export interface UniqueViewCount {
  url: string;
  uniqueViews: number;
}

const DEFAULT_LOG_PATH = path.resolve('uploads', 'web.log');

export async function parseLogFile(filePath: string = DEFAULT_LOG_PATH): Promise<UrlViewCount[]> {
  const content = await fs.readFile(filePath, 'utf-8');
  const lines = content.trim().split('\n');

  const urlCountMap: Record<string, number> = {};

  for (const line of lines) {
    const [url] = line.split(' ');
    urlCountMap[url] = (urlCountMap[url] || 0) + 1;
  }

  return Object.entries(urlCountMap)
    .map(([url, views]) => ({ url, views }))
    .sort((a, b) => b.views - a.views);
}

export async function parseUniqueViews(filePath: string = DEFAULT_LOG_PATH): Promise<UniqueViewCount[]> {
  const content = await fs.readFile(filePath, 'utf-8');
  const lines = content.trim().split('\n');

  const urlToIpsMap: Record<string, Set<string>> = {};

  for (const line of lines) {
    const [url, ip] = line.split(' ');
    if (!urlToIpsMap[url]) {
      urlToIpsMap[url] = new Set();
    }
    urlToIpsMap[url].add(ip);
  }

  return Object.entries(urlToIpsMap)
    .map(([url, ipSet]) => ({ url, uniqueViews: ipSet.size }))
    .sort((a, b) => b.uniqueViews - a.uniqueViews);
}
