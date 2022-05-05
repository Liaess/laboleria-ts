export interface Cake {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export type CakeCreateData = Omit<Cake, "id">;
