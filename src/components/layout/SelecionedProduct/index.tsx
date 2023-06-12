"use client";
import { Text } from "@utils/Texts/Text";
import { Price } from "@utils/Texts/Price";
import { Galery } from "../Galery";
import { asText } from "@prismicio/client";
import { Header } from "@utils/Texts/Header";
import { Button } from "@utils/Buttons/Button";
import { Favorite } from "../Favorite";
import { Normalize } from "@/src/functions/Normalize";
import { ImageField } from "@prismicio/types";
import { ProductDocumentData, Simplify } from "@/prismicio-types";
import { useCart } from "@/src/data/hooks/useCart";

interface SelecionedProductProps {
  product: Simplify<ProductDocumentData>;
  images: ImageField<never>[];
  uid: string;
}

export function SelecionedProduct({
  product,
  images = [],
  uid = "",
}: SelecionedProductProps) {
  if (!product) return null;

  const { addItem } = useCart(product, uid);
  const { capitalizeName } = Normalize();

  const { product_name, colection, description, initial_price, quote } =
    product;

  return (
    <div
      className="bg-placeholder-gradient w-full max-w-7xl h-full lg:max-h-[655px]
      xl:gap-16 lg:p-11 lg:flex rounded-md lg:rounded-3xl m-auto
      overflow-hidden md:overflow-visible"
    >
      <div>
        <Galery images={images} />
      </div>
      <div className="flex flex-col justify-between pt-12 pb-2 md:pb-4 px-2 md:px-4">
        <div className="flex justify-between items-center">
          <Header
            title={capitalizeName(asText(product_name))}
            subtitle={capitalizeName(`Coleção ${asText(colection)}`)}
          />
          <Favorite />
        </div>
        <Text
          text={asText(description)}
          className="py-4 line-clamp-6 h-28 lg:h-fit overflow-hidden"
        />
        <Price price={asText(initial_price)} size="xl" />
        <Text
          text={`${asText(quote)} - ${asText(product_name)}`}
          className="py-2"
        />
        <Button
          label="Adicionar ao carrinho"
          onClick={addItem}
        />
      </div>
    </div>
  );
}
