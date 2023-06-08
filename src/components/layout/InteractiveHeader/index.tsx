import Link from "next/link";
import Image from "next/image";
import { Title } from "@utils/Texts/Title";
import { Button } from "../../utils/Buttons/Button";
import { PrismicNextImage } from "@prismicio/next";
import { ImageType } from "@/src/models/ImageType";

interface InteractiveHeaderProps {
  title: string;
  buttonLabel: string;
  href?: string;
  image: ImageType;
  logo: string;
}

export function InteractiveHeader({
  logo = "",
  title = "",
  buttonLabel = "",
  href = "#",
  image,
}: InteractiveHeaderProps) {
  if (!image) return null;

  const noRoute = href === "#" ? "pointer-events-none cursor:default" : "";

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 lg:p-8">
      {logo && (
        <Image
          src={logo}
          alt="Pablo Studio 3D Logo"
          width={153}
          height={153}
          className="w-20 lg:w-40 h-20 lg:h-40 rounded-full m-auto z-10"
        />
      )}
      <Title
        title={title}
        size="2xl"
        className="py-9 text-center text-lg lg:text-2xl z-10"
      />
      <Link href={href} className={`z-10 ${noRoute}`}>
        <Button label={buttonLabel} className="text-sm lg:text-xl" />
      </Link>
      <PrismicNextImage
        data-testid="thumbnail"
        field={image}
        alt=""
        fill
        quality={100}
        className="absolute z-0"
      />
    </div>
  );
}
