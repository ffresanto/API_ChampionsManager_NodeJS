import { Request, Response } from 'express';
import CreateAwardService from '../services/CreateAwardService';
import DeleteAwardService from '../services/DeleteAwardService';
import ListAwardService from '../services/ListAwardService';
import ShowAwardService from '../services/ShowAwardService';
import UpdateAwardService from '../services/UpdateAwardService';

export default class AwardController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAwards = new ListAwardService();
    const awards = await listAwards.execute();

    return response.json(awards);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showAward = new ShowAwardService();
    const award = await showAward.execute({ id });

    return response.json(award);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, origin, organization, national } = request.body;

    const createAward = new CreateAwardService();

    const award = await createAward.execute({
      name,
      origin,
      organization,
      national,
    });

    return response.json(award);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, origin, organization, national } = request.body;
    const { id } = request.params;

    const updateAward = new UpdateAwardService();

    const Award = await updateAward.execute({
      id,
      name,
      origin,
      organization,
      national,
    });

    return response.json(Award);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAward = new DeleteAwardService();

    await deleteAward.execute({ id });

    return response.json([]);
  }
}
