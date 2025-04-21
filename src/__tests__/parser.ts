import { parseLogFile } from '../parser';
import fs from 'fs/promises';
import path from 'path';

describe('Log Parser - Most Page Views', () => {
  const testFilePath = path.join(__dirname, 'test.log');

  beforeAll(async () => {
    const content = `/products/1 242.179.160.190
/about 5.42.159.38
/products/1 146.154.3.246
/about 1.1.1.1
/home 8.8.8.8`;

    await fs.writeFile(testFilePath, content);
  });

  afterAll(async () => {
    await fs.unlink(testFilePath);
  });

  test('returns sorted list of URLs by page views', async () => {
    const result = await parseLogFile(testFilePath);
    expect(result).toEqual([
      { url: '/products/1', views: 2 },
      { url: '/about', views: 2 },
      { url: '/home', views: 1 }
    ]);
  });
});
