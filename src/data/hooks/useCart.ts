"use client";
import { asText } from "@prismicio/client";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { ProductDocumentData, Simplify } from "@/prismicio-types";
import { CartCollection } from "@/src/models/CartCollection";

export const useCart = () => {
  const { setLocalStorage, getLocalStorage, STORAGE_KEY } = useLocalStorage();
  const addItem = (  product: Simplify<ProductDocumentData>,
    uid: string) => {
  const { dimensions } = product;
  const normalizeDimensions = dimensions && dimensions[0];

  const productDimensions = {
    ncdformato: asText(normalizeDimensions?.ncdformato),
    ncdservico: asText(normalizeDimensions?.ncdservico),
    nvlaltura: asText(normalizeDimensions?.nvlaltura),
    nvlcomprimento: asText(normalizeDimensions?.nvlcomprimento),
    nvllargura: asText(normalizeDimensions?.nvllargura),
    nvlpeso: asText(normalizeDimensions?.nvlpeso),
    scepdestino: asText(normalizeDimensions?.scepdestino),
    sceporigem: asText(normalizeDimensions?.sceporigem),
  };

  const cartItem = {
    uid,
    thumb: product.images && product.images[0]?.image,
    title: asText(product.product_name),
    collection: asText(product.colection),
    initialPrice: asText(product.initial_price),
    count: 1,
    dimensions: productDimensions,
  };


    const data = getLocalStorage("cart");

    if (data) {
      const exist = data.find((item: CartCollection) => item.uid === uid);

      if (exist) {
        const initialPrice = parseFloat(exist.initialPrice);

        const updatedCartItem = {
          ...exist,
          count: exist.count + 1,
          actualPrice: initialPrice * (exist.count + 1),
        };

        const updatedData = data.map((item: CartCollection) => {
          if (item.uid === uid) {
            return updatedCartItem;
          }
          return item;
        });

        return setLocalStorage("cart", updatedData);
      } else {
        const updatedData = [...data, cartItem];
        return setLocalStorage("cart", updatedData);
      }
    }

    return setLocalStorage("cart", [cartItem]);
  };

  const removeItem = (uid: string) => {
    const data = getLocalStorage("cart");

    if (data) {
      const updatedData = data.filter((item: CartCollection) => item.uid !== uid);
      setLocalStorage("cart", updatedData);
    }
  };

  const removeFromCount = (uid: string) => {
    const data = getLocalStorage("cart");

    if (data) {
      let itemRemoved = false;
      const updatedData = data.map((item: CartCollection) => {
        const initialPrice = parseFloat(item.initialPrice);

        if (item.uid === uid && item.count > 0) {
          return {
            ...item,
            actualPrice: initialPrice * (item.count - 1),
            count: item.count - 1,
          };
        } else {
          return item;
        }
      });

      const finalData = updatedData.filter((item: CartCollection) => {
        if (item.count <= 0 && !itemRemoved) {
          removeItem(uid);
          itemRemoved = true;
          return false;
        }
        return true;
      });

      setLocalStorage("cart", finalData);
    }
  };

  const addToCount = (uid: string) => {
    const data = getLocalStorage("cart");

    if (data) {
      const updatedData = data.map((item: CartCollection) => {
        const initialPrice = parseFloat(item.initialPrice);

        if (item.uid === uid) {
          return {
            ...item,
            actualPrice: initialPrice * (item.count + 1),
            count: item.count + 1,
          }
        } else {
          return item;
        }
      });
      setLocalStorage("cart", updatedData);
    }

    return
  };

  const clearCart = () => window.localStorage.removeItem(`${STORAGE_KEY}cart`);

  return {
    addItem,
    removeItem,
    removeFromCount,
    addToCount,
    clearCart,
  };
};
