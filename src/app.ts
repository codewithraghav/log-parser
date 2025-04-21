import express from 'express';


const app = express();
const PORT = 3008;



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
