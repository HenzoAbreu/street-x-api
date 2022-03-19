import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Address from '../typeorm/entities/Address';
import AddressRepository from '../typeorm/repositories/AddressRepository';
import RedisCache from '../../../shared/cache/RedisCache';

interface IRequest {
  zip_code: string;
}

class GetAddressByZipCode {
  public async execute({ zip_code }: IRequest): Promise<Address> {
    const addressRepository = getCustomRepository(AddressRepository);
    
    const redisCache = new RedisCache();

    let address = await redisCache.recover<Address>(
      zip_code
    );

    if (!address) {
      address = await addressRepository.findByZipCode(zip_code) ?? null;
      if (!address) {
        throw new AppError('ZipCode Not Found');
      }

      await redisCache.save(zip_code, address);
    }

    return address
  }
}

export default GetAddressByZipCode;
