export type CartCollection = {
  collection: string;
  count: number;
  dimensions: {
    ncdformato: string;
    ncdservico: string;
    nvlaltura: string;
    nvlcomprimento: string;
    nvllargura: string;
    nvlpeso: string;
    scepdestino: string;
    sceporigem: string;
  };
  actualPrice: number;
  initialPrice: string;
  thumb: {
    alt: null;
    copyright: null;
    dimensions: {
      width: number;
      height: number;
    };
    url: string;
  };
  title: string;
  uid: string;
};
