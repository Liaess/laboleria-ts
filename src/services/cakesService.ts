import Conflict from "../errors/conflict";
import * as cakesRepository from "../repositories/cakesRepository";
import { Cake, CakeCreateData } from "../interfaces";

export async function createCake(data: CakeCreateData) {
  const cake = await cakesRepository.find(data.name);
  if (cake) throw new Conflict("Bolo já cadastrado");
  await cakesRepository.create(data);
}
