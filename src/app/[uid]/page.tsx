import { Suspense } from "react"
import { PrismicNextImage } from "@prismicio/next";
import { getProductByUid } from "@Prismic/index"


interface ProductProps {
  params: {
    uid: string;
  };
}

export default async function Product({ params }: ProductProps) {
  const { images, product } = await getProductByUid(params)

  return (
    <>
      <h1>Produtos</h1>
      <Suspense fallback={<p>Carregando produtos...</p>}>
        <h2>{product.uid}</h2>

        {images.map((image) => (
          <PrismicNextImage field={image} alt="" />
        ))}
      </Suspense>
    </>
  );
}