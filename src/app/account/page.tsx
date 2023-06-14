'use client'
import { Button } from "@/src/components/utils/Buttons/Button"
import { useUser } from "@/src/data/hooks/useUser"
import { signOut } from "next-auth/react"

export default function accountPage() {
  const { status, user } = useUser()

  if(status === "loading") return <p>Carregandoooo...</p>

  const teste = () => {
    console.log('a')

    signOut()
  }

  return (
    <div className="pt-32">
      <h1>Olá, {user?.name}</h1>

      <Button onClick={teste} label="Sair" variant="dark" labelSize="xs" />
    </div>
  )
}
