import { prisma } from "../database";
import { ClientCreateData } from "../interfaces";

export async function findUsingName(name: string) {
  return await prisma.clients.findUnique({
    where: {
      name,
    },
  });
}

export async function findUsingId(id: number) {
  return await prisma.clients.findUnique({
    where: {
      id,
    },
  });
}

export async function create(data: ClientCreateData) {
  await prisma.clients.create({
    data,
  });
}
