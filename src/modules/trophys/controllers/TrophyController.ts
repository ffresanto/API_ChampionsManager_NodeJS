import { Request, Response } from 'express';
import CreateTrophyService from '../services/CreateTrophyService';
import DeleteTrophyService from '../services/DeleteTrophyService';
import ListTrophyService from '../services/ListTrophyService';
import ShowTrophyService from '../services/ShowTrophyService';
import UpdateTrophyService from '../services/UpdateTrophyService';

export default class TrophyController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listTrophys = new ListTrophyService();
    const Trophys = await listTrophys.execute();

    return response.json(Trophys);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showTrophy = new ShowTrophyService();
    const Trophy = await showTrophy.execute({ id });

    return response.json(Trophy);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, origin, organization, national } = request.body;

    const createTrophy = new CreateTrophyService();

    const Trophy = await createTrophy.execute({
      name,
      origin,
      organization,
      national,
    });

    return response.json(Trophy);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, origin, organization, national } = request.body;
    const { id } = request.params;

    const updateTrophy = new UpdateTrophyService();

    const Trophy = await updateTrophy.execute({
      id,
      name,
      origin,
      organization,
      national,
    });

    return response.json(Trophy);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTrophy = new DeleteTrophyService();

    await deleteTrophy.execute({ id });

    return response.json([]);
  }
}
