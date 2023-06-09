"use client";
import { Button } from "@utils/Buttons/Button";
import { FloatCard } from "../FloatCard";
import { Title } from "@utils/Texts/Title";
import { getProduct } from "@/src/data/prismic";
import { useRouter } from "next/navigation";
import { Text } from "../../utils/Texts/Text";
import { Header } from "../../utils/Texts/Header";
import { asText } from "@prismicio/richtext";

export async function NewsInfo() {
  const { push } = useRouter();
  const { product } = await getProduct();
  const { Name, collection, description, quote, images, uid } = product[0];

  return (
    <div className="relative w-fit max-w-7xl h-fit lg:max-h-[655px]
      bg-dark/75 md:bg-placeholder-gradient m-auto rounded-md base:rounded-3xl md:flex">
      <div className="w-full max-w-[950px] h-56 m-auto md:h-[500px] lg:animate-float">
        <FloatCard field={images[0]?.image} href={`/${uid}`} />
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
        <Button
          label="Acessar"
          onClick={() => push(`/${uid}`)}
          className="w-full"
        />
      </div>
    </div>
  );
}
