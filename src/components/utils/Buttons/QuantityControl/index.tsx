import { LeftArrowIcon, RightArrowIcon } from "@/src/icons";
import { Text } from "../../Texts/Text";

interface QuantityControlProps {
  qtd: number;
  increment: () => void;
  decrement: () => void;
}

export function QuantityControl({
  qtd = 0,
  increment,
  decrement,
}: QuantityControlProps) {
  const danger = qtd <= 0 ? "hover:text-black/25" : "text-black";

  return (
    <div className="w-20 rounded-3xl px-2 py-1 border-2 border-black bg-transparent flex items-center justify-between">
      <button
        onClick={decrement}
        className={`duration-500 hover:-translate-x-0.5 ${danger}`}
      >
        <LeftArrowIcon />
      </button>
      <Text as="span" dark weigth="bold" size="sm" text={qtd} />
      <button
        onClick={increment}
        className="duration-500 hover:translate-x-0.5"
      >
        <RightArrowIcon />
      </button>
    </div>
  );
}
