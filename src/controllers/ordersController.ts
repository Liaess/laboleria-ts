import { Request, Response } from "express";
import * as ordersService from "../services/ordersService";

export async function createOrder(req: Request, res: Response) {
  await ordersService.createOrder(req.body);
  res.sendStatus(201);
}

export async function getOrders(req: Request, res: Response) {
  const date = req.query.date?.toString();
  const orders = await ordersService.getAllOrders(date);
  res.status(200).send(orders);
}
