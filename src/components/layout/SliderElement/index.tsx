import { ReactNode } from "react";

interface CardInfoProps {
  children: ReactNode;
}

export function SliderElement({ children }: CardInfoProps) {
  return (
    <div id="wrap-gallery" className="overflow-x-auto snap-x snap-center">
      <div id="wrap-gallery" className="m-auto w-fit duration-500">
        <div id="gallery" className="flex gap-4 p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
