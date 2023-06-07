interface TitleProps {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "2xl" | "xl" | "lg";
  title: string;
  className?: string;
}

export function Title({ as, title, size = "lg", className = ""}: TitleProps) {
  const Comp = as ?? "h1";

  return (
    <Comp className={`font-Roboto text-${size} text-white font-bold ${className}`}>
      {title}
    </Comp>
  );
}
