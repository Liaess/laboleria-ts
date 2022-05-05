import { prisma } from "../database";
import { CakeCreateData } from "../interfaces";

export async function find(name: string) {
  return await prisma.cakes.findUnique({
    where: {
      name,
    },
  });
}

export async function create(data: CakeCreateData) {
  await prisma.cakes.create({
    data,
  });
}
