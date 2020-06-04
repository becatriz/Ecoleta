import express from 'express';
import routes from '../src/'

const app = express();

app.use(express.json());
app.use(routes);


app.listen('3333');

