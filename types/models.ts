export type Entity<T> = { id: number; attributes: T };

export type ProductModel = {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  image_cover?: string;
};
