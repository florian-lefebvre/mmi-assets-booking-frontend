import { client } from "../../../lib/client";
import type { Entity, ProductModel } from "../../../types/models";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { data } = await client.rest<Entity<ProductModel>>(
    `/api/products/${params.id}`
  );
  return (
    <div className="">
      <div>Product</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
