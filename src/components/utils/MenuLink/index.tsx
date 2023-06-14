"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowDownIcon } from "../../../icons/index";

interface MenuLinkProps {
  href: string;
  label: string;
  icon?: boolean;
  onClick?: () => void;
}

export function MenuLink({
  href = "/",
  label = "",
  icon = false,
  ...props
}: MenuLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const pathName = usePathname();

  const setHover = () => setIsHovered((isHovered) => !isHovered);

  const activeLink =
    pathName === href ? "lg:border-2 lg:border-white" : "lg:border-2 lg:border-dark";

  return (
    <Link
      {...props}
      onMouseEnter={setHover}
      onMouseLeave={setHover}
      href={href}
      className={`relative pointer-events-auto w-full z-50 lg:w-fit font-Roboto text-white lg:bg-dark rounded-md text-xs sm:text-lg
      py-2 px-6 flex gap-1 items-center lg:after:rounded-md after:text-dark
      after:duration-300 after:top-0 after:absolute after:w-0 after:h-full hover:after:w-full after:bg-white/25
      ${isHovered ? "after:left-0" : "after:right-0"}
      ${activeLink}`}
    >
      {label}
      <span
        className={`transition-all duration-500 ${
          isHovered ? "translate-y-0.5" : "translate-y-0"
        }`}
      >
        {icon && <ArrowDownIcon />}
      </span>
    </Link>
  );
}
