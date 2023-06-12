import { redirect } from "next/navigation";
import { createClient } from "@/prismicio";

interface ProductProps {
  uid: string;
}

const client = createClient();

export const getProductByUid = async ({ uid }: ProductProps) => {
  const getting = await client
    .getByUID("product", uid)
    .catch(() => redirect("/"));

  const selecionedProduct = getting.data;
  const images = getting.data.images.map((image) => image.image);

  return {
    images,
    selecionedProduct,
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
