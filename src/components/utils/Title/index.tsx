interface TitleProps {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "2xl" | "xl" | "lg";
  title: string;
}

export function Title({ as, title, size = "lg" }: TitleProps) {
  const Comp = as ?? "h1";

  return (
    <Comp className={`font-Roboto text-${size} text-white font-bold`}>
      {title}
    </Comp>
  );
}
