
import '../styles/globals.css'
import { Session } from 'next-auth'
import { headers } from 'next/headers'
import { AuthContext } from "../data/contexts/AuthContext";
import { Menu } from "../components/layout/Menu";

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const session = await getSession(headers().get('cookie') ?? '');
  return (
    <html lang="pt-BR">
      <head />
      <body>
        <AuthContext session={session}>
          <Menu session={session}  />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
