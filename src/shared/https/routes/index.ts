import { Router } from 'express';
import addressRoute from '../../../modules/address/routes/address.routes';

const routes = Router();

routes.use('/address', addressRoute);

export default routes;
