import { Text } from "../../Texts/Text";
import { LoginLoading } from "@/src/components/animations/LoginAnimation";
import { GoogleIcon, InstaIcon } from "@/src/icons";

interface LoginButtonProps {
  method: "instagram" | "Google";
  reverse?: boolean;
  isLoading?: boolean;
  onClick: () => void;
}

const icons = {
  instagram: <InstaIcon />,
  Google: <GoogleIcon />,
};

const labels = {
  instagram: "instagram",
  Google: "Google",
};

export function LoginButton({
  method = "Google",
  reverse = false,
  isLoading = false,
  onClick,
}: LoginButtonProps) {
  const label = <Text dark as="span" text={`Entrar com o ${labels[method]}`} />;
  const mode = reverse ? "flex-row-reverse" : "";

  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={`flex items-center gap-2 ring-1 ring-black
      rounded-lg w-60 h-16 justify-center relative
      after:text-dark
      after:duration-200 after:top-1/2 hover:after:top-0 after:rounded-lg
      after:absolute after:w-0 after:h-0 hover:after:h-full hover:after:w-full after:bg-dark/5
      active:after:bg-dark/20 disabled:pointer-events-none
      ${mode}`}
    >
      {!isLoading && (
        <>
          {label}
          {icons[method]}
        </>
      )}
      {isLoading && <LoginLoading loadOption={method} />}
    </button>
  );
}
