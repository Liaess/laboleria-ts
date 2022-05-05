import { Request, Response } from "express";
import * as clientsService from "../services/clientsService";

export async function createClient(req: Request, res: Response) {
  await clientsService.createClient(req.body);
  res.sendStatus(201);
}
