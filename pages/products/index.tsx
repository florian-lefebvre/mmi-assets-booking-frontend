import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { client } from "../../lib/client";
import type { Entity, ProductModel } from "../../types/models";

export const getServerSideProps: GetServerSideProps<{
  data: Entity<ProductModel>[];
}> = async () => {
  const { data } = await client.rest<Entity<ProductModel>[]>("/api/products");
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

export default function ProductsPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="">
      <div>Products</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
