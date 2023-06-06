interface ButtonProps {
  labelSize?: "xl" | "lg" | "sm";
  label?: string;
  onClick?: () => void;
  variant?: "dark" | "light";
}

export function Button({
  label = "Acessar",
  variant = "light",
  labelSize = "lg",
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
      text-${labelSize}
      ${mode}`}
      {...props}
    >
      {label}
    </button>
  );
}
