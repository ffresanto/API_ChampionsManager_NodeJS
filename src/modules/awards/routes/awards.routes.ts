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

export default awardsRouter;
