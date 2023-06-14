import { DefaultSession, NextAuthOptions, TokenSet } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

interface User {
  session: DefaultSession,
  token: TokenSet
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET!
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: "light",
  },
  pages: {
  },
  session: {
    maxAge: 30 * 60 * 24 * 60 // 30 days
  },
  callbacks: {
    async session({session, token}: User){
      return {
        ...session,
        id: token.sub
      };
    },

    async signIn() {
      try {
        return true;
      } catch (erro) {
        console.log('Falha na autenticação:', erro);
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
