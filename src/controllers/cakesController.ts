import { Request, Response } from "express";
import * as cakesService from "../services/cakesService";

export async function createCake(req: Request, res: Response) {
  await cakesService.createCake(req.body);
  res.sendStatus(201);
}
