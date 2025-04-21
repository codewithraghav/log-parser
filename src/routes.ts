import { Router } from 'express';
import { parseLogFile, parseUniqueViews } from './parser';
const router = Router();

router.get('/', async (req, res) => {

    try {
        const logEntries = await parseLogFile();
        res.json(logEntries);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to parse log file.' });
      }
  
});

router.get('/get-unique-views', async (req, res) => {
  
    try {
        const uniqueViews = await parseUniqueViews();
        res.json(uniqueViews);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to parse unique views.' });
      }
});

export default router;