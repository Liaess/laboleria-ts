import Conflict from "../errors/conflict";
import * as clientsRepository from "../repositories/clientsRepository";
import { ClientCreateData } from "../interfaces";

export async function createClient(data: ClientCreateData) {
  const user = await clientsRepository.find(data.name);
  if (user) throw new Conflict("Cliente já cadastrado");
  await clientsRepository.create(data);
}
