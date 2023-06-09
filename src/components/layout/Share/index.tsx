'use client';

import { useState, ReactNode } from "react";
import { ShareIcon } from "@/src/icons";
import { Button } from "@utils/Buttons/Button";
import { Text } from "@utils/Texts/Text";

type OptionsType = {
  label: string;
  icon: ReactNode;
  action: () => void;
};

interface ShareProps {
  options: OptionsType[];
}

export function Share({ options = [] }: ShareProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openButton = () => setIsOpen((isOpen) => !isOpen);
  const changeOpen = isOpen ? `h-24 bg-white/80` : "h-16 bg-transparent";

  return (
    <div
      className={`h-16 w-fit relative shadow-easy overflow-hidden flex flex-col
      items-center cursor-pointer duration-500 ease-out ${changeOpen}`}
      onMouseEnter={openButton}
      onMouseLeave={openButton}
    >
      <Button label={<ShareIcon isOpen={isOpen} />} />
      {options.map((option, i) => {
        const { action, icon, label } = option;
        return (
          <button
            key={i}
            onClick={action}
            className="duration-500 hover:bg-white w-full h-full flex justify-center items-center gap-1"
          >
            <Text text={label} dark size="md" weigth="bold" />
            <span>{icon}</span>
          </button>
        );
      })}
    </div>
  );
}
