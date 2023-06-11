"use client";

import Link from "next/link";
import { Text } from "@utils/Texts/Text";
import { asText } from "@prismicio/client";
import { Header } from "@utils/Texts/Header";
import { Button } from "@utils/Buttons/Button";
import { Product } from "@/src/models/Prismic/ImageType";
import { Favorite } from "../Favorite";
import { IconCirle } from "@utils/Buttons/IconCirle";
import { ArrowUpIcon } from "@/src/icons";
import { PrismicNextImage } from "@prismicio/next";
import { useRef, useState, useEffect } from "react";
import { productMocked } from "@/src/mocks/productMocked";

interface ProductCardProps {
  product: Product[];
}

export const set = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  }
};

export function ProductCard({ product = [] }: ProductCardProps) {
  if (product.length === 0) return null;
  const [current, setCurrent] =
    useState<React.RefObject<HTMLDivElement> | null>(null);
  const cardRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, product.length);
  }, [product]);

  const handleClick = (cardRef: React.RefObject<HTMLDivElement>) => {
    if (current === cardRef) {
      setCurrent(null);
    } else {
      setCurrent(cardRef);
      set(cardRef);
    }
  };

  return (
    <>
      {product.map((field, i) => {
        const { Name, collection, quote, images, uid } = field;
        const cardRef = useRef<HTMLDivElement>(null);
        cardRefs.current[i] = cardRef;

        return (
          <div
            onClick={() => handleClick(cardRef)}
            key={uid}
            id={uid}
            ref={cardRef}
            className={`relative delay-150 flex flex-row rounded-3xl h-96 sm:h-80 duration-500 bg-dark/75 sm:bg-placeholder-gradient cursor-pointer shrink-0 ${
              current === cardRef ? "w-72 sm:w-[500px] rounded-lg" : "w-72"
            }`}
          >
            <PrismicNextImage
              alt=""
              field={images[0]?.image}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0d7avBwACzAFCwWiztQAAAABJRU5ErkJggg=="
              placeholder="blur"
              className={`h-80 w-72 z-10 ${
                current === cardRef ? " rounded-lg" : "rounded-3xl"
              }`}
            />
            <div
              data-testid="cardInfo"
              onClick={(e) => e.stopPropagation()}
              className="sm:hidden absolute bottom-4 flex items-center justify-center gap-2 w-full"
            >
              <Favorite />
              <Link href={`/product/${uid}`}>
                <IconCirle icon={<ArrowUpIcon />} />
              </Link>
              <Text
                size="md"
                weigth="bold"
                text={asText(Name)}
                className="truncate"
              />
            </div>
            <div className={`absolute h-full z-0 right-0 duration-500  ${
                current === cardRef ? "hidden sm:block opacity-100" : "opacity-0"
              }`}>
              <div
                className="relative base:right-0 p-4 base:w-52 w-full h-full z-20
              flex flex-col items-center base:items-start justify-between m-auto base:m-0"
              >
                <Header
                  subtitle={`Coleção ${asText(collection)}`}
                  title={asText(Name)}
                />
                <div data-testid="favorite" onClick={(e) => e.stopPropagation()}>
                  <Favorite />
                </div>

                <Text
                  text={asText(quote)}
                  size="xs"
                  className="hidden base:flex"
                />
                <Link href={`/product/${uid}`} className="hidden base:flex">
                  <Button label="Acessar" labelSize="xs" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
