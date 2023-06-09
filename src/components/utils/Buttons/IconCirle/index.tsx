import { ReactNode } from "react";

interface IconCirleProps {
  icon: ReactNode;
  size?: "medium" | "large";
  onClick?: () => void;
  className?: string;
}

export function IconCirle({
  icon = "",
  size = "medium",
  className = "",
  ...props
}: IconCirleProps) {
  const sizeOption = size === "medium" ? "w-8 h-8 p-2" : "w-12 h-12 p-3";

  return (
    <div {...props}
      className={`rounded-full flex items-center justify-center text-white bg-dark/25
      cursor-pointer hover:animate-jump
      ${className}
      ${sizeOption}`}
    >
      {icon}
    </div>
  );
}
