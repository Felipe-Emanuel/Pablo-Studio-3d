import { useState } from "react";
import { FillHeart, OutlineHeart } from "@/src/icons";
import { IconCirle } from "@utils/Buttons/IconCirle";

interface FavoriteProps {
  size?: "large" | "medium";
}

export function Favorite({ size = "medium" }: FavoriteProps) {
  //MOCKED LIKE STATE
  const [isLiked, setIsLiked] = useState(false);

  return (
      <IconCirle
        className="animate-heartWiggle"
        icon={isLiked ? <FillHeart /> : <OutlineHeart />}
        size={size}
        onClick={() => setIsLiked((isLiked) => !isLiked)}
      />
  );
}
