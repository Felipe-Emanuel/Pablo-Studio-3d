import { ReactNode } from "react";

export interface TextProps {
  as?: "span";
  size?: "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs";
  weigth?: "normal" | "bold" | "light";
  text: ReactNode;
  className?: string;
}

export function Text({
  as,
  text,
  size = "sm",
  weigth,
  className = "",
}: TextProps) {
  const Comp = as ?? "p";

  return (
    <Comp
      className={`font-Roboto text-${size} text-white font-${weigth} ${className}`}
    >
      {text}
    </Comp>
  );
}
