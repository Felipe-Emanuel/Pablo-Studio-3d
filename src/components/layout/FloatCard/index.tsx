import ParallaxTilt from "react-parallax-tilt"
import { PrismicNextImage } from "@prismicio/next";
import { ImageType } from "@/src/models/ImageType";
import Link from "next/link";

interface FloatCardProps{
  field: ImageType;
  href: string;
  small?: boolean
}

export function FloatCard({
  field,
  href = "#",
  small = false,
}: FloatCardProps) {
  const size = small ? "w-80 h-80" : "w-full h-full";
  if(!field) return null;

  return (
    <ParallaxTilt tiltMaxAngleX={5} tiltMaxAngleY={5} className={size}>
      <Link href={href}>
        <PrismicNextImage field={field} fill className="rounded-3xl drop-shadow-card relative" />
        <div className="absolute inset-0 bg-black/25 rounded-3xl" />
      </Link>
    </ParallaxTilt>
  )
}