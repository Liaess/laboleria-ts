import { Request, Response } from "express";
import httpStatus from "http-status";
import * as clientsService from "../services/clientsService";
import * as ordersService from "../services/ordersService";

export async function createClient(req: Request, res: Response) {
  await clientsService.createClient(req.body);
  res.sendStatus(httpStatus.CREATED);
}

export async function getAllOrdersFromClient(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const orders = await ordersService.getAllOrdersFromClient(id);
  res.status(httpStatus.OK).send(orders);
}
