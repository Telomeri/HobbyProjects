import express from 'express';
import trainingRouter from './controllers/training';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

//only got one so far
app.use('/api/training', trainingRouter);

app.listen(port, function () {
  console.log(`Running RestHub on port ${port}`);

});