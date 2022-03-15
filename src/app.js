import "core-js/stable";
import "regenerator-runtime/runtime";
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes  from './routes';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();


const app = express();
app.use(cors());

app.use(logger('dev')); // log requests to the console
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

//The 404 Route
app.get('*', function(req, res){
  res.status(404).json({message: 'Endpoint not found'});
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

export default app;
