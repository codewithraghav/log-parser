import express from 'express';
import routes from './routes';

const app = express();
const PORT = 3014;

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
