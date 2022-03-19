import { Router } from 'express';
import AddressController from '../controllers/AddressController';

const addrerssRouter = Router();
const addressController = new AddressController();

addrerssRouter.get('/:zip_code', addressController.getByZipCode);

export default addrerssRouter;
