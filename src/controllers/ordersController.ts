import { Request, Response } from "express";
import httpStatus from "http-status";
import NotFound from "../errors/NotFound";
import * as ordersService from "../services/ordersService";

export async function createOrder(req: Request, res: Response) {
  await ordersService.createOrder(req.body);
  res.sendStatus(httpStatus.CREATED);
}

export async function getOrders(req: Request, res: Response) {
  const date = req.query.date?.toString();
  const orders = await ordersService.getAllOrders(date);
  if (orders.length === 0)
    throw new NotFound("Não foi possível encontrar pedidos!");
  res.status(httpStatus.OK).send(orders);
}

export async function getOrdersWithId(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const order = await ordersService.getOrder(id);
  if (!order) throw new NotFound("Não foi possível encontrar o pedido!");
  res.status(httpStatus.OK).send(order);
}
