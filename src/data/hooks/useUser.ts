import { useSession } from "next-auth/react";
export const useUser = () => {
  const session = useSession()

  const authenticatedUser = {
    id: session.data?.expires,
    user: session.data?.user,
    status: session.status,
  };

  return authenticatedUser;
};
