interface TitleProps {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "2xl" | "xl" | "lg" | "xs";
  title: string | undefined;
  className?: string;
  dark?: boolean;
}

export function Title({
  as,
  title,
  size = "lg",
  className = "",
  dark = false,
}: TitleProps) {
  const Comp = as ?? "h1";
  const mode = dark ? "text-black" : "text-white";

  return (
    <Comp className={`font-Roboto text-${size} ${mode} font-bold ${className}`}>
      {title}
    </Comp>
  );
}
