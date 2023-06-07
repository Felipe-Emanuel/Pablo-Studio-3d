"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowDownIcon } from "../../../icons/index";

interface MenuLinkProps {
  href: string;
  label: string;
  icon?: boolean;
}

export function MenuLink({
  href = "/",
  label = "",
  icon = false,
}: MenuLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const pathName = usePathname();

  const setHover = () => setIsHovered((isHovered) => !isHovered);

  const activeLink =
    pathName === href ? "border-2 border-white" : "border-2 border-dark";

  return (
    <Link
      onMouseEnter={setHover}
      onMouseLeave={setHover}
      href={href}
      className={`absolute font-Roboto text-white bg-dark rounded-md text-lg
      py-2 px-6 flex gap-1 items-center after:rounded-md hover:animate-jump after:text-dark
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
