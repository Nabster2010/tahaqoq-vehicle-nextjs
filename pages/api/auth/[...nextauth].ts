import NextAuth from "next-auth";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "user@example.com",
          className: "formInput",
        },
        password: {
          label: "Password",
          type: "password",
          className: "formInput",
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        // Add logic here to look up the user from the credentials supplied
        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user) {
          return null;
        }
        if (user) {
          const isValid = await compare(password, user.password);
          if (!isValid) {
            return null;
          }
          if (user.active === false) {
            return null;
          }
          return user;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = {
          id: user.id,
          name: user.name,
          email: user.email,
          active: user.active,
          role: user.role,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },

    // async signIn({ user, account, profile, email, credentials }) {
    //   const isAllowedToSignIn = user.active;
    //   if (isAllowedToSignIn) {
    //     return true;
    //   } else {
    //     // Return false to display a default error message
    //     return false;
    //     // Or you can return a URL to redirect to:
    //     // return '/unauthorized'
    //   }
    // },
  },
});
