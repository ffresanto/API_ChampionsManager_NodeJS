import { EntityRepository, Repository } from 'typeorm';
import Award from '../entities/Award';

@EntityRepository(Award)
export class AwardRepository extends Repository<Award> {
  public async findByName(name: string): Promise<Award | undefined> {
    const product = this.findOne({
      where: {
        name,
      },
    });

    return product;
  }
}
