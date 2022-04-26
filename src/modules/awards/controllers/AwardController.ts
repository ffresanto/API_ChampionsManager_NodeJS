import { Request, Response } from 'express';
import ListAwardService from '../services/ListAwardService';

export default class AwardController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAwards = new ListAwardService();

    const awards = await listAwards.execute();

    return response.json(awards);
  }
}
