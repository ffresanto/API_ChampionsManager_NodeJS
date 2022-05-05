import AppError from "@shared/errors/AppError";
import { removeAccentuation } from "@shared/util/utilities";
import { getCustomRepository } from "typeorm";
import Award from "../typeorm/entities/Award";
import { AwardRepository } from "../typeorm/repositories/AwardsRepository";

interface IRequest {
  id: string;
  name: string;
  origin: string;
  national: boolean;
}

class UpdateAwardService {
  public async execute({
    id,
    name,
    origin,
    national,
  }: IRequest): Promise<Award> {
    const AwardsRepository = getCustomRepository(AwardRepository);

    const Award = await AwardsRepository.findOne(id);

    if (!Award) {
      throw new AppError('Award not found.');
    }

    if (name) {
      name = removeAccentuation(name);
    }

    const AwardExists = await AwardsRepository.findByName(name);

    if (AwardExists) {
      throw new AppError('There is already one Award with this name');
    }

    Award.name = name;
    Award.origin = origin;
    Award.national = national;

    await AwardsRepository.save(Award);

    return Award;
  }
}

export default UpdateAwardService;
