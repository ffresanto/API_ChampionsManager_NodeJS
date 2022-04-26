import { Router } from 'express';
import AwardController from '../controllers/AwardController';

const awardsRouter = Router();
const awardsController = new AwardController();

awardsRouter.get('/', awardsController.index);

export default awardsRouter;
