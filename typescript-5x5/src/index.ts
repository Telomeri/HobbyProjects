import express from 'express';
import cors from 'cors';
import trainingRouter from './controllers/training';

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;

//only got one so far
app.use('/api/training', trainingRouter);

app.listen(port, function () {
  console.log(`Running RestHub on port ${port}`);

});