import { ReactNode } from "react";

interface CardModelProps {
  produc: ReactNode;
  info: ReactNode;
}

export function CardModel({ produc, info }: CardModelProps) {
  return (
    <div className="w-full max-w-7xl h-full max-h-[655px] p-2 md:p-7 bg-placeholder-gradient m-auto rounded-3xl flex">
      {produc}
      <div className="w-[50%] base:pl-8">{info}</div>
    </div>
  );
}
