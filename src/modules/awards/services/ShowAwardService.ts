import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Award from '../typeorm/entities/Award';
import { AwardRepository } from '../typeorm/repositories/AwardsRepository';

interface IRequest {
  id: string;
}

class ShowAwardService {
  public async execute({ id }: IRequest): Promise<Award> {
    const awardRepository = getCustomRepository(AwardRepository);

    const award = await awardRepository.findOne(id);

    if (!award) {
      throw new AppError('Product not found.');
    }

    return award;
  }
}

export default ShowAwardService;
