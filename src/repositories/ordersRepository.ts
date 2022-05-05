import { prisma } from "../database";
import { OrderCreateData } from "../interfaces";
import { OrdersData } from "../interfaces";
export async function create(data: OrderCreateData) {
  return await prisma.orders.create({
    data,
  });
}

export async function get(): Promise<OrdersData[]> {
  return await prisma.orders.findMany({
    select: {
      clients: true,
      cakes: true,
      createdAt: true,
      quantity: true,
      totalPrice: true,
    },
  });
}

export async function getWithDate(date: string): Promise<OrdersData[]> {
  return await prisma.orders.findMany({
    where: {
      createdAt: {
        contains: date,
      },
    },
    select: {
      clients: true,
      cakes: true,
      createdAt: true,
      quantity: true,
      totalPrice: true,
    },
  });
}

export async function getOrder(id: number): Promise<OrdersData> {
  return await prisma.orders.findUnique({
    where: {
      id,
    },
    select: {
      clients: true,
      cakes: true,
      createdAt: true,
      quantity: true,
      totalPrice: true,
    },
  });
}

export async function getOrdersClient(id: number): Promise<OrdersData[]> {
  return await prisma.orders.findMany({
    where: {
      clients: {
        id,
      },
    },
    select: {
      clients: true,
      cakes: true,
      createdAt: true,
      quantity: true,
      totalPrice: true,
    },
  });
}
