import { LoginButton } from "@/src/components/utils/Buttons/LoginButton";
import { getProviders } from "next-auth/react";

interface ProvidersProps {
  status: "authenticated" | "unauthenticated" | "loading"
}

export async function Providers({status}: ProvidersProps) {
  const providers = await getProviders();

    return (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <LoginButton
            isLoading={status === "loading"}
            key={provider.name}
            // @ts-expect-error: dei opções além de apenas a simples tipagem 'string' vinda do Next-Auth
            method={provider.name}
            id={provider.id}
            reverse
          />
        ))}
    </>
  );
}
