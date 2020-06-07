import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer'
import{ celebrate, Joi } from 'celebrate'

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController'

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();



routes.get('/items',itemsController.index);

routes.post('/points', 
upload.single('image'),
celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    city: Joi.string().required(),
    uf: Joi.number().required().max(2),
    items: Joi.string().required(),
  }), 
}, {
  
  //Valida todos os campos de uma vez só
  abortEarly: false
}),
pointsController.create);

routes.get('/points/:id',pointsController.show);

routes.get('/points',pointsController.index);




routes.get('/', (request, respose) => {
  return respose.json({
    message: "Hello World"
  });
})

export default routes;