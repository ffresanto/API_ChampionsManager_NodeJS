import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { AwardRepository } from '../typeorm/repositories/AwardsRepository';

interface IRequest {
  id: string;
}

class DeleteAwardService {
  public async execute({ id }: IRequest): Promise<void> {
    const AwardsRepository = getCustomRepository(AwardRepository);

    const Award = await AwardsRepository.findOne(id);

    if (!Award) {
      throw new AppError('Award not found.');
    }

    await AwardsRepository.remove(Award);
  }
}

export default DeleteAwardService;
