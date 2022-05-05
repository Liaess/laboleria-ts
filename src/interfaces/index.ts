import { Decimal } from "@prisma/client/runtime";

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

export interface Order {
  id: number;
  clientId: number;
  cakeId: number;
  quantity: number;
  createdAt: string;
  totalPrice: number;
}

export type OrderCreateData = Omit<Order, "id">;

export interface OrdersData {
  clients: {
    id: number;
    name: string;
    address: string;
    phone: string;
  };
  cakes: {
    id: number;
    name: string;
    price: Decimal;
    description: string;
    image: string;
  };
  createdAt: string;
  quantity: number;
  totalPrice: Decimal;
}
