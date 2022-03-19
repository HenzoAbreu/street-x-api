import { Request, Response } from 'express';
import GetAddressByZipCodeService from '../services/GetAddressByZipCode';


export default class AddressController {
  public async getByZipCode(request: Request, response: Response): Promise<Response> {
    const { zip_code } = request.params;

    const getAddressService = new GetAddressByZipCodeService();
    const address = await getAddressService.execute({zip_code});
    return response.json(address);
  }
}
