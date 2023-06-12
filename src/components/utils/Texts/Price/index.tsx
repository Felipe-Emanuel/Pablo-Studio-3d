import { Normalize } from "@/src/functions/Normalize";

interface PriceProps {
  price: string | number;
  weigth?: "bold" | "light";
  size?: "xl" | "lg";
  border?: boolean;
  dark?: boolean;
}

export function Price({
  price = "0",
  size = "lg",
  weigth = "bold",
  border = false,
  dark = false,
}: PriceProps) {
  const { formatPrice } = Normalize();
  const mode = dark ? "text-dark/75" : "text-white/75";
  const borded = border ? "border-b-2 border-dark px-7" : `border-0 ${mode}`;

  return (
    <div data-testid="price" className={`w-fit h-fit ${borded} font-${weigth} text-${size}`}>
      {formatPrice(price)}
    </div>
  );
}
