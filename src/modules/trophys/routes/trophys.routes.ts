import { Router } from 'express';
import TrophyController from '../controllers/TrophyController';
import { celebrate, Joi, Segments } from 'celebrate';

const TrophysRouter = Router();
const TrophysController = new TrophyController();

TrophysRouter.get('/', TrophysController.index);

TrophysRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  TrophysController.show,
);

TrophysRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      origin: Joi.string().required(),
      organization: Joi.string().required(),
      national: Joi.boolean().required(),
    },
  }),
  TrophysController.create,
);

TrophysRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      origin: Joi.string().required(),
      organization: Joi.string().required(),
      national: Joi.boolean().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  TrophysController.update,
);

TrophysRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  TrophysController.delete,
);

export default TrophysRouter;
