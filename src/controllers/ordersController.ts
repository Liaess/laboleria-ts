import { Request, Response } from "express";
import NotFound from "../errors/NotFound";
import * as ordersService from "../services/ordersService";

export async function createOrder(req: Request, res: Response) {
  await ordersService.createOrder(req.body);
  res.sendStatus(201);
}

export async function getOrders(req: Request, res: Response) {
  const date = req.query.date?.toString();
  const orders = await ordersService.getAllOrders(date);
  if(orders.length === 0) throw new NotFound("Não foi possível encontrar pedidos!")
  res.status(200).send(orders);
}
