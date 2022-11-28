import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { client } from "../../lib/client";
import type { Entity, ProductModel } from "../../types/models";

export const getServerSideProps: GetServerSideProps<{
  data: Entity<ProductModel>;
}> = async ({ params }) => {
  const { data } = await client.rest<Entity<ProductModel>>(
    `/api/products/${params?.id}`
  );
  return {
    props: {
      data,
    },
  };
};

export default async function ProductPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="">
      <div>Product</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
