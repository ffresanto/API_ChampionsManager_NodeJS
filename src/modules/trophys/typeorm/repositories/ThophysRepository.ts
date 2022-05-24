import { EntityRepository, Repository } from 'typeorm';
import Trophy from '../entities/Trophy';

@EntityRepository(Trophy)
export class TrophysRepository extends Repository<Trophy> {
  public async findByName(name: string): Promise<Trophy | undefined> {
    const trophy = this.findOne({
      where: {
        name,
      },
    });

    return trophy;
  }
}
