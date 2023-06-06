export interface TextProps{
  as?: "span";
  size?: "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs"
  weigth?: "normal" | "bold" | "light"
  text: string;
}

export function Text({as, text, size = "sm", weigth}: TextProps) {
  const Comp = as ?? "p"

  return (
    <Comp className={`font-Roboto text-${size} text-white font-${weigth}`}>
      {text}
    </Comp>
  )
}
