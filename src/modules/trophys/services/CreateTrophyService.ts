import AppError from '@shared/errors/AppError';
import { removeAccentuation } from '@shared/util/utilities';
import { getCustomRepository } from 'typeorm';
import Trophy from '../typeorm/entities/Trophy';
import { TrophysRepository } from '../typeorm/repositories/ThophysRepository';

interface IRequest {
  name: string;
  origin: string;
  organization: string;
  national: boolean;
}

class CreateTrophyService {
  public async execute({ name, origin, organization, national }: IRequest): Promise<Trophy> {
    const TrophyRepository = getCustomRepository(TrophysRepository);

    if (name) {
      name = removeAccentuation(name);
    }

    const TrophyExists = await TrophyRepository.findByName(name);

    if (TrophyExists) {
      throw new AppError('There is already one Trophy with this name');
    }

    const product = TrophyRepository.create({
      name,
      origin,
      organization,
      national,
    });

    await TrophyRepository.save(product);

    return product;
  }
}

export default CreateTrophyService;
