import Image from "next/image";
import ParallaxTilt from "react-parallax-tilt"
import { useState } from "react";
import { ImageType } from "@models/ImageType";
import { PrismicNextImage } from "@prismicio/next";

interface GaleryProps {
  images: ImageType[];
}

export function Galery({ images = [] }: GaleryProps) {
  if (images.length === 0) return null;

  const [currentImage, setCurrentImage] = useState(0);

  const { url, alt } = images[currentImage];

  return (
    <div className="h-[655px] w-[600px] m-auto flex gap-4">
      <div className="w-[80%]">
        <ParallaxTilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="w-full max-w-md h-full max-h-2xl cursor-none">
          <Image
            src={url}
            alt={alt!}
            quality={100}
            fill
            className="rounded-3xl drop-shadow-card animate-appear relative"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0d7avBwACzAFCwWiztQAAAABJRU5ErkJggg=="
            placeholder="blur"
          />
        </ParallaxTilt>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        {images.map((image, i) => (
          <PrismicNextImage
            data-testid="thumbnail"
            onMouseEnter={() => setCurrentImage(i)}
            key={i}
            field={image}
            alt=""
            quality={100}
            className="w-20 h-28 rounded-md drop-shadow-thumbnail cursor-pointer relative"
          />
        ))}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>
    </div>
  );
}
