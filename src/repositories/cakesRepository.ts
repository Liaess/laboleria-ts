import { prisma } from "../database";
import { Cake, CakeCreateData } from "../interfaces";

export async function findUsingName(name: string) {
  return await prisma.cakes.findUnique({
    where: {
      name,
    },
  });
}

export async function findUsingId(id: number) {
  return await prisma.cakes.findUnique({
    where: {
      id,
    },
  });
}

export async function create(data: CakeCreateData) {
  await prisma.cakes.create({
    data,
  });
}
