import { Suspense } from "react"
import { getProductByUid } from "@Prismic/index"
import { SelecionedProduct } from "@/src/components/layout/SelecionedProduct";


interface ProductProps {
  params: {
    uid: string;
  };
}

export default async function Product({ params }: ProductProps) {
  const { selecionedProduct, images } = await getProductByUid(params)

  return (
    <>
      <h1>Produtos</h1>
      <Suspense fallback={<p>Carregando produtos...</p>}>
        <SelecionedProduct product={selecionedProduct} images={images} uid={params.uid} />
      </Suspense>
    </>
  );
}
