import { EntityRepository, Repository } from 'typeorm';
import Address from '../entities/Address';

@EntityRepository(Address)
class AddressRepository extends Repository<Address> {
  public async findByZipCode(zip_code: string): Promise<Address | undefined> {
    const address = await this.findOne({
      where: {
        zip_code,
      },
    });

    return address;
  }
}

export default AddressRepository;
