import { PrismicNextImage } from "@prismicio/next";
import { redirect } from "next/navigation";
import { createClient } from "@/prismicio";
import Image from "next/image";

interface ProductProps {
  params: {
    uid: string;
  };
}

export default async function Product({ params }: ProductProps) {
  const client = createClient();

  const product = await client.getByUID("product", params.uid);
  const images = product.data.images.map((image) => image.image);
  console.log();

  return (
    <>
      <h1>{product.uid}</h1>

      {images.map((image) => (
        <PrismicNextImage
        field={image}
      />
      ))}
    </>
  );
}
