import { getCustomRepository } from 'typeorm';
import Trophy from '../typeorm/entities/Trophy';
import { TrophysRepository } from '../typeorm/repositories/ThophysRepository';

class ListTrophyService {
  public async execute(): Promise<Trophy[]> {
    const TrophyRepository = getCustomRepository(TrophysRepository);

    const Trophys = TrophyRepository.find();

    return Trophys;
  }
}
export default ListTrophyService;
