import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TrophysRepository } from '../typeorm/repositories/ThophysRepository';

interface IRequest {
  id: string;
}

class DeleteTrophyService {
  public async execute({ id }: IRequest): Promise<void> {
    const TrophyRepository = getCustomRepository(TrophysRepository);

    const Trophy = await TrophyRepository.findOne(id);

    if (!Trophy) {
      throw new AppError('Trophy not found.');
    }

    await TrophyRepository.remove(Trophy);
  }
}

export default DeleteTrophyService;
