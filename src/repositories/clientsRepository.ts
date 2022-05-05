import { prisma } from "../database";
import { ClientCreateData } from "../interfaces";

export async function find(name: string) {
  return await prisma.clients.findUnique({
    where: {
      name,
    },
  });
}

export async function create(data: ClientCreateData) {
  await prisma.clients.create({
    data,
  });
}
