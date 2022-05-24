import AppError from '@shared/errors/AppError';
import { removeAccentuation } from '@shared/util/utilities';
import { getCustomRepository } from 'typeorm';
import Trophy from '../typeorm/entities/Trophy';
import { TrophysRepository } from '../typeorm/repositories/ThophysRepository';

interface IRequest {
  id: string;
  name: string;
  origin: string;
  organization: string;
  national: boolean;
}

class UpdateTrophyService {
  public async execute({
    id,
    name,
    origin,
    organization,
    national,
  }: IRequest): Promise<Trophy> {
    const TrophyRepository = getCustomRepository(TrophysRepository);

    const Trophy = await TrophyRepository.findOne(id);

    if (!Trophy) {
      throw new AppError('Trophy not found.');
    }

    if (name) {
      name = removeAccentuation(name);
    }

    /*const TrophyExists = await TrophyRepository.findByName(name);

    if (TrophyExists) {
      throw new AppError('There is already one Trophy with this name');
    }*/

    Trophy.name = name;
    Trophy.origin = origin;
    Trophy.organization = organization;
    Trophy.national = national;

    await TrophyRepository.save(Trophy);

    return Trophy;
  }
}

export default UpdateTrophyService;
