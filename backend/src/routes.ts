import express from 'express';
import knex from './database/connection'

const routes = express.Router();


routes.get('/items', async (request, response) => {

  try {
    const items = await knex('items').select('*');
    return response.json(items);
    
  } catch (error) {
      console.log(error)
  }


})


routes.get('/', (request, respose) => {
  return respose.json({
    message: "Hello World"
  });
})

export default routes;