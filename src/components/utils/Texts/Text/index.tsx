import { ReactNode } from "react";

export interface TextProps {
  as?: "span";
  size?: "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs";
  weigth?: "normal" | "bold" | "light";
  text: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Text({
  as,
  text,
  size = "sm",
  weigth,
  className = "",
  dark = false,
}: TextProps) {
  const Comp = as ?? "p";
  const mode = dark ? 'text-dark' : 'text-white';

  return (
    <Comp
      className={`font-Roboto text-${size} ${mode} font-${weigth} ${className}`}
    >
      {text}
    </Comp>
  );
}
