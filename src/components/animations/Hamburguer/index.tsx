'use client'
import { useLottie } from "lottie-react";
import { useEffect } from "react";
import Hamburguer from "./Hamburguer.json";

interface HamburguerAnimationProps {
  isClose: boolean;
  onClick: () => void;
}

export function HamburguerAnimation({ isClose, onClick }: HamburguerAnimationProps) {
  useEffect(() => {
    isClose === false ? setDirection(-1) : setDirection(1);
    play();
    setSpeed(3)
  }, [isClose]);

  const options = {
    animationData: Hamburguer,
    autoplay: false,
    loop: 0,
  };

  const { View, play, setDirection, setSpeed } = useLottie(options);

  return (
    <button
      onClick={() => onClick()}
      aria-label="Menu Mobile"
      className='lg:hidden absolute left-4 sm:left-8 top-4 sm:top-8 w-4 sm:w-8 z-40'
    >
      {View}
    </button>
  );
}
