"use client";

import Link from "next/link";
import { Text } from "@utils/Texts/Text";
import { Title } from "@utils/Texts/Title";
import { Button } from "@utils/Buttons/Button";
import { Header } from "@utils/Texts/Header";
import { asText } from "@prismicio/richtext";
import { Product } from "@/src/models/Prismic/ImageType";
import { FloatCard } from "../FloatCard";
import { setPreferences } from "@/src/functions/setPreferences";

interface NewsInfoProps {
  product: Product[];
}

export function NewsInfo({ product = [] }: NewsInfoProps) {
  if (product.length === 0) return null;
  const lasProduct = product[0];

  const { Name, collection, description, quote, images, uid } = lasProduct;

  return (
    <div
      className="relative w-fit max-w-7xl h-fit lg:max-h-[655px]
      bg-dark/75 md:bg-placeholder-gradient m-auto rounded-md base:rounded-3xl md:flex"
    >
      <div className="w-full max-w-[950px] h-56 m-auto md:h-[500px] lg:animate-float">
        <FloatCard
          role="contentinfo"
          field={images[0]?.image}
          href={`/product/${uid}`}
          onClick={() => setPreferences(lasProduct)}
        />
      </div>
      <div className="md:w-[50%] p-2 base:p-8 overflow-x-hidden">
        <Title as="h2" title="O que há de novo" className="text-center" />
        <Header
          title={asText(Name)}
          subtitle={`Coleção ${asText(collection)}`}
        />
        <Text
          text={asText(description)}
          className="py-4 line-clamp-6 overflow-ellipsis h-28 lg:h-fit lg:line-clamp-none"
        />
        <Text text={`"${asText(quote)}" - ${asText(Name)}`} className="py-4" />
        <Link href={`/product/${uid}`}>
          <Button
            label="Acessar"
            className="w-full"
            onClick={() => setPreferences(lasProduct)}
          />
        </Link>
      </div>
    </div>
  );
}
