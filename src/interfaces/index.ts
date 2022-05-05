export interface Cake {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export type CakeCreateData = Omit<Cake, "id">;
export interface Client {
  id: number;
  name: string;
  address: string;
  phone: string;
}

export type ClientCreateData = Omit<Client, "id">;
