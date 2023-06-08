import { ReactNode } from "react"

interface ButtonProps {
  labelSize?: "xl" | "lg" | "sm";
  label?: ReactNode;
  onClick?: () => void;
  variant?: "dark" | "light";
  className?: string;
}

export function Button({
  label = "Acessar",
  variant = "light",
  labelSize,
  className = "",
  ...props
}: ButtonProps) {
  const mode =
    variant === "dark"
      ? "bg-dark rounded-md shadow-button"
      : "bg-transparent border-2 border-white";

  return (
    <button
      className={`py-3 px-10 text-center transition-all duration-300 font-bold
      hover:bg-white text-white hover:text-dark
      text-${labelSize ?? "text-sm lg:text-xl"}
      ${className}
      ${mode}`}
      {...props}
    >
      {label}
    </button>
  );
}
