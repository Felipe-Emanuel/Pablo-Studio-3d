import { useLottie } from "lottie-react";
import Loading from "./Loading.json";

export function InputLoading() {

  const options = {
    animationData: Loading,
    autoplay: true,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <span
      className="
        rounded-full transition-opacity bg-black/25
        relative w-10 h-10 flex items-center hover:opacity-75"
    >
      {View}
    </span>
  );
}
