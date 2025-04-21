import express from 'express';
import routes from './routes';

const app = express();
const PORT = 3012;

app.use('/', routes);

app.get('/', (req, res) => {
  res.redirect('/parse-log');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
