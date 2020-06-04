import express from 'express'

const routes = express.Router();

routes.get('/', (request, respose) => {
  return respose.json({
    message : "Hello World"
  })
})

export default routes;