import express from 'express';
import routes from './routes';

const app = express();
const PORT = 3011;

app.use('/get-most-page-views', routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
