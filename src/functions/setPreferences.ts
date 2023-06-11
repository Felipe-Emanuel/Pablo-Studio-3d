"use client";

import { Product } from "@models/Prismic/ImageType";
import { useLocalStorage } from "@hooks/useLocalStorage";

export const setPreferences = (product: Product) => {
  const { setLocalStorage, getLocalStorage } = useLocalStorage();

  const preferences = {
    uid: product.uid,
    image: product.images?.[0],
    title: product.Name,
    collection: product.collection,
    preferences: {
      collection: product.collection,
      qtdVisited: 1,
    },
  };

  const setCollectionVisit = () => {
    const data = getLocalStorage("Preferences");
    if (data) {
      const exist = data.find((item: Product) => item.uid === product.uid);

      if (exist) {
        const updatedProduct = {
          ...preferences,
          preferences: {
            ...preferences.preferences,
            qtdVisited: exist.preferences.qtdVisited + 1,
          },
        };

        const updatedData = data.map((item: Product) => {
          if (item.uid === product.uid) {
            return updatedProduct;
          }
          return item;
        });

        return setLocalStorage("Preferences", updatedData);
      } else {
        return setLocalStorage("Preferences", [...data, preferences]);
      }
    }

    return setLocalStorage("Preferences", [preferences]);
  };

  return setCollectionVisit();
};
