import { useLottie } from "lottie-react";
import GoogleLoading from "./GoogleLoading.json";
import InstagtamLoading from "./InstagtamLoading.json";

interface LoginLoadingProps {
  loadOption: "instagram" | "Google"
}

export function LoginLoading({loadOption}: LoginLoadingProps) {

  const loading = {
    Google: GoogleLoading,
    instagram: InstagtamLoading
  }

  const options = {
    animationData: loading[loadOption],
    autoplay: true,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="w-8 h-8">
      {View}
    </div>
  );
}
