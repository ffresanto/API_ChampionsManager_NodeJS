import { Router } from 'express';
import AwardController from '../controllers/AwardController';
import { celebrate, Joi, Segments } from 'celebrate';

const awardsRouter = Router();
const awardsController = new AwardController();

awardsRouter.get('/', awardsController.index);

awardsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  awardsController.show,
);

awardsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      origin: Joi.string().required(),
      national: Joi.boolean().required(),
    },
  }),
  awardsController.create,
);

awardsRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      origin: Joi.string().required(),
      national: Joi.boolean().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  awardsController.update,
);

awardsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  awardsController.delete,
);

export default awardsRouter;
