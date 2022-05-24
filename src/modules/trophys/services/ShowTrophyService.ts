import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Trophy from '../typeorm/entities/Trophy';
import { TrophysRepository } from '../typeorm/repositories/ThophysRepository';

interface IRequest {
  id: string;
}

class ShowTrophyService {
  public async execute({ id }: IRequest): Promise<Trophy> {
    const TrophyRepository = getCustomRepository(TrophysRepository);

    const Trophy = await TrophyRepository.findOne(id);

    if (!Trophy) {
      throw new AppError('Product not found.');
    }

    return Trophy;
  }
}

export default ShowTrophyService;
