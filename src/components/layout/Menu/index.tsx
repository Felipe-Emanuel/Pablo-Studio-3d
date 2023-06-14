"use client";
import { Session } from "next-auth";
import { useState } from "react";
import { MenuLink } from "@utils/MenuLink";
import { HamburguerAnimation } from "@animations/Hamburguer";
import { usePathname } from "next/navigation";

interface MenuProps {
  session: Session;
}

export function Menu({ session }: MenuProps) {
  const pathname = usePathname()
  const authPath = "/api/auth/signin"
  if(pathname === authPath) return null;

  const [isOpen, setIsOpen] = useState(false);
  const routes = [
    {
      href: "/catalog",
      label: "Catálogo",
      icon: false,
    },
    {
      href: "/cart",
      label: "Cofre da Arte",
      icon: false,
    },
    {
      href: "/budget",
      label: "Orçamento",
      icon: false,
    },
  ];

  const renderUserButton = () => {

    if (session?.user) {
      return <MenuLink href="/account" label="Minha conta" icon />;
    }
    return <MenuLink href="/api/auth/signin" label="Entrar" />;
  };


  return (
    <div
      onBlur={() => setIsOpen(false)}
      className={`absolute lg:relative bg-transparent inset-0 pointer-events-none z-50 ${
        isOpen ? "bg-black/75" : "bg-transparent"
      }`}
    >
      <div
        className="
        pointer-events-auto
        "
      >
        <HamburguerAnimation
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          isClose={isOpen}
        />
      </div>
      <nav
        className={`
        pointer-events-auto
        lg:w-full w-2/3 base:w-1/2 bg-dark/75 lg:bg-transparent h-full lg:h-fit flex flex-col
        lg:flex-row gap-6 lg:justify-between relative lg:-top-14 pt-12 sm:pt-20 lg:px-20 transition-all ease-linear
        lg:translate-x-0 lg:duration-0 delay-100
        ${isOpen ? "translate-x-0 drop-shadow-card" : "-translate-x-[100%]"}
      `}
      >
        <ul className="flex flex-col lg:flex-row gap-6">
          {routes.map((route, i) => (
            <li key={i}>
              <MenuLink
                href={route.href}
                label={route.label}
                icon={route.icon}
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </li>
          ))}
        </ul>

        {renderUserButton()}
      </nav>
    </div>
  );
}
