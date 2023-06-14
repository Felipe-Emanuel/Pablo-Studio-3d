'use client';
import { Providers } from "@/src/components/layout/Providers";
import { Button } from "@/src/components/utils/Buttons/Button";
import { Title } from "@/src/components/utils/Texts/Title";
import { useUser } from "@/src/data/hooks/useUser";
import { useRouter } from "next/navigation";

export default async function Signin() {
  const { user, status } = useUser()
  const { push, back } = useRouter()

  if(user) {
    push("/")
  }

  return (
    <div className="w-fit base:w-72 relative h-fit bg-white p-10 rounded-lg flex flex-col gap-4 shadow-easy justify-center items-center">
      <Button label="Voltar" variant="dark" onClick={back} labelSize="sm" />
      <Title title='“Não adentre a boa noite apenas com ternura...”' dark className="text-center" />
      <Providers status={status} />
    </div>
  );
}
