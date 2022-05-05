import AppError from "@shared/errors/AppError";
import { removeAccentuation } from "@shared/util/utilities";
import { getCustomRepository } from "typeorm";
import Award from "../typeorm/entities/Award";
import { AwardRepository } from "../typeorm/repositories/AwardsRepository";

interface IRequest {
  name: string;
  origin: string;
  national: boolean;
}

class CreateAwardService {
  public async execute({ name, origin, national }: IRequest): Promise<Award> {
    const awardRepository = getCustomRepository(AwardRepository);

    if (name) {
      name = removeAccentuation(name);
    }

    const awardExists = await awardRepository.findByName(name);

    if (awardExists) {
      throw new AppError('There is already one Award with this name');
    }

    const product = awardRepository.create({
      name,
      origin,
      national,
    });

    await awardRepository.save(product);

    return product;
  }
}

export default CreateAwardService;
