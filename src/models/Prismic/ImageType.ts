import { RichTextField } from "@prismicio/types";
import { GroupField, TitleField } from "@prismicio/client";
import { ProductDocumentDataImagesItem, Simplify } from "@/prismicio-types";

export type ImageType = {
  dimensions: {
    width: number;
    height: number;
  };
  alt: string | null;
  copyright: string | null;
  url: string;
};

export type Product = {
  initialPrice: string;
  count: number;
  Name: TitleField;
  collection: RichTextField;
  description: RichTextField;
  quote: RichTextField;
  images: GroupField<Simplify<ProductDocumentDataImagesItem>>;
  uid: string;
};
