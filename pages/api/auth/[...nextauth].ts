import NextAuth from "next-auth";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";

export default NextAuth({
  providers: [
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
  },
});
