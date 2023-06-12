"use client";
import Link from "next/link";
import { Price } from "@utils/Texts/Price";
import { Header } from "@utils/Texts/Header";
import { useCart } from "@/src/data/hooks/useCart";
import { useState } from "react";
import { CartCollection } from "@/src/models/CartCollection";
import { QuantityControl } from "@utils/Buttons/QuantityControl";
import { useLocalStorage } from "@/src/data/hooks/useLocalStorage";
import { PrismicNextImage } from "@prismicio/next";

interface CartItemProps {}

export function CartItem({}: CartItemProps) {
  const { getLocalStorage } = useLocalStorage();

  const localStorageItem: CartCollection[] = getLocalStorage("cart");
  const [data, setData] = useState<CartCollection[]>(localStorageItem || []);

  const { addToCount, removeFromCount } = useCart();

  const handleIncrement = (uid: string) => {
    addToCount(uid);

    const updated = getLocalStorage("cart");
    setData(updated);
  };

  const handleDecrement = (uid: string) => {
    removeFromCount(uid);

    const updated = getLocalStorage("cart");
    setData(updated);
  };

  return (
    <>
      {data?.map((product, i) => {
        const {
          collection,
          thumb,
          title,
          uid,
          actualPrice,
          initialPrice,
          count,
        } = product;

        return (
          <div
            className="w-full h-fit p-9 flex gap-9 border-b-2 border-black bg-white"
            key={i}
          >
            <Link href={`/product/${uid}`} className="ring-1 ring-black">
              <PrismicNextImage field={thumb} alt="" className="w-40 h-36" />
            </Link>
            <div className="flex flex-col justify-between w-full">
              <Link href={`/product/${uid}`} className="w-fit hover:opacity-75">
                <Header
                  titleSize="lg"
                  subtitleSize="xs"
                  title={title}
                  subtitle={collection}
                  dark
                />
              </Link>
              <div className="flex justify-between w-full items-center">
                <Price price={initialPrice} dark />
                <Price
                  price={!actualPrice ? initialPrice : actualPrice}
                  border
                />
              </div>
              <QuantityControl
                decrement={() => handleDecrement(uid)}
                increment={() => handleIncrement(uid)}
                qtd={count}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
