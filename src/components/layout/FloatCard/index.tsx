'use client'
import ParallaxTilt from "react-parallax-tilt"
import { PrismicNextImage } from "@prismicio/next";
import { ImageFieldImage } from "@prismicio/client";
import Link from "next/link";

interface FloatCardProps{
  field: ImageFieldImage | null | undefined;
  href: string;
  small?: boolean
  onClick?: () => void;
  role?: string
}

export function FloatCard({
  field,
  href = "#",
  small = false,
  ...props
}: FloatCardProps) {
  const size = small ? "w-80 h-80" : "w-full h-full";
  if(!field) return null;

  return (
    <ParallaxTilt tiltMaxAngleX={5} tiltMaxAngleY={5} className={size}>
      <Link href={href} {...props}>
        <PrismicNextImage field={field} className="rounded-3xl drop-shadow-card relative w-full h-full" alt="" />
        <div className="absolute inset-0 bg-black/25 rounded-3xl" />
      </Link>
    </ParallaxTilt>
  )
}
