import * as cakesRepository from "../repositories/cakesRepository";
import * as clientsRepository from "../repositories/clientsRepository";
import * as orderRepository from "../repositories/ordersRepository";
import { OrderCreateData } from "../interfaces";
import NotFound from "../errors/NotFound";
import dayjs from "dayjs";

export async function createOrder(data: OrderCreateData) {
  const cake = await cakesRepository.findUsingId(data.cakeId);
  if (!cake) throw new NotFound("Bolo não encontrado");
  const client = await clientsRepository.findUsingId(data.clientId);
  if (!client) throw new NotFound("Cliente não encontrado");
  let totalPrice = cake.price.toNumber() * data.quantity;
  const insertData = {
    ...data,
    totalPrice,
    createdAt: dayjs().format("YYYY-MM-DD HH:mm"),
  };
  await orderRepository.create(insertData);
}

export async function getAllOrders(date: string | undefined) {
  if (date) {
    return await orderRepository.getWithDate(date);
  }
  return await orderRepository.get();
}
