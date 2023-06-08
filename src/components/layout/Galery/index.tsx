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
    <div className="relative h-[600px] md:h-[655px] w-full md:w-[600px] md:flex m-auto gap-4 overflow-hidden base:overflow-y-visible base:overflow-x-visible">
        <ParallaxTilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="m-auto w-full max-w-xs md:max-w-md h-[450px] md:h-full cursor-none hover:animate-jump">
          <Image
            src={url}
            alt={alt!}
            quality={100}
            fill
            className="rounded-3xl drop-shadow-card md:animate-appear relative"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0d7avBwACzAFCwWiztQAAAABJRU5ErkJggg=="
            placeholder="blur"
          />
        </ParallaxTilt>
      <div className="relative -bottom-10 md:-top-10 flex items-center justify-center m-auto md:flex-col gap-1 sm:gap-8">
        {images.map((image, i) => (
            <PrismicNextImage
            data-testid="thumbnail"
            onMouseEnter={() => setCurrentImage(i)}
            key={i}
            field={image}
            alt=""
            quality={100}
            className={`w-20 h-28 rounded-md drop-shadow-thumbnail cursor-pointer relative brightness-75 ${i === currentImage ? 'md:animate-jump' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
