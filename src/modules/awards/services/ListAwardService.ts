import { getCustomRepository } from 'typeorm';
import Award from '../typeorm/entities/Award';
import { AwardRepository } from '../typeorm/repositories/AwardsRepository';

class ListAwardService {
  public async execute(): Promise<Award[]> {
    const awardRepository = getCustomRepository(AwardRepository);

    const awards = awardRepository.find();

    return awards;
  }
}
export default ListAwardService;
