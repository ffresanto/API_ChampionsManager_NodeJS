import awardsRouter from '@modules/awards/routes/awards.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/api/awards', awardsRouter);

export default routes;
