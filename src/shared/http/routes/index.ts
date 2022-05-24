import awardsRouter from '@modules/awards/routes/awards.routes';
import TrophysRouter from '@modules/trophys/routes/trophys.routes';

import { Router } from 'express';

const routes = Router();

routes.use('/api/awards', awardsRouter);

routes.use('/api/trophys', TrophysRouter);

export default routes;
