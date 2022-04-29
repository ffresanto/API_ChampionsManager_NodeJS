import { Request, Response } from 'express';
import ListAwardService from '../services/ListAwardService';
import ShowAwardService from '../services/ShowAwardService';

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
}
