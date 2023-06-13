"use client";
import { useState } from "react";
import { MenuLink } from "@utils/MenuLink";
import { HamburguerAnimation } from "@animations/Hamburguer";

interface MenuProps {
  user: boolean;
}

export function Menu({ user }: MenuProps) {
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
    if (user) {
      return <MenuLink href="/account" label="Minha conta" icon />;
    }

    return <MenuLink href="/auth/login" label="Entrar" />;
  };

  return (
    <div
      onBlur={() => setIsOpen(false)}
      className={`absolute inset-0 ${
        isOpen ? "bg-black/25" : "bg-transparent"
      }`}
    >
      <HamburguerAnimation
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        isClose={isOpen}
      />
      <nav
        className={`
        lg:w-full w-2/3 base:w-1/2 bg-white/25 lg:bg-transparent h-full lg:h-fit flex flex-col
        lg:flex-row gap-6 lg:justify-between fixed p-4 pt-12 sm:p-20 lg:px-20 duration-500 ease-in
        lg:translate-x-0 lg:duration-0
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
