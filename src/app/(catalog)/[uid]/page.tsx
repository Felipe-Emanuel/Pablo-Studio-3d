import { Suspense } from "react";
import { getProduct } from "@/src/data/prismic";
import { Text } from "@utils/Texts/Text";
import { SliderElement } from "@/src/components/layout/SliderElement";
import { ProductCard } from "@/src/components/layout/ProductCard";
import { Menu } from "@/src/components/layout/Menu";

interface catalogDrawingsProps {
  params: {
    uid: string;
  };
}
export default async function catalogDrawings({
  params,
}: catalogDrawingsProps) {
  const { product } = await getProduct();

  return (
    <>
      <Text dark size="2xl" weigth="bold" text={`Catálogo de ${params.uid}`} />
      <Suspense fallback={<Text text="Carregando..." dark />}>
        <SliderElement children={<ProductCard product={product} />} />
      </Suspense>
    </>
  );
}
