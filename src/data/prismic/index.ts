import { redirect } from "next/navigation";
import { createClient } from "@/prismicio";

interface ProductProps {
  uid: string;
}

const client = createClient();

export const getProductByUid = async ({ uid }: ProductProps) => {
  const product = await client
    .getByUID("product", uid)
    .catch(() => redirect("/"));

  const images = product.data.images.map((image) => image.image);

  return {
    images,
    product,
  };
};

export const getProduct = async () => {
  const products = await client.getAllByType("product");

  const product = products.map((product) => {
    const { data } = product;
    return {
      uid: product.uid,
      Name: data.product_name,
      brand: data.brand,
      collection: data.colection,
      dimensions: data.dimensions,
      images: data.images,
      initialPrice: data.initial_price,
      quote: data.quote,
      type: data.type,
      weight: data.weight,
      description: data.description,
    };
  });

  return { product };
};
