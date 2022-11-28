import { client } from "../../lib/client";
import type { Entity, ProductModel } from "../../types/models";

export default async function ProductsPage() {
  const { data } = await client.rest<Entity<ProductModel>[]>("/api/products");

  return (
    <div className="">
      <div>Products</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
