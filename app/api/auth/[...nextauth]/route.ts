import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/prisma";
import Credentials from "next-auth/providers/credentials";
import { error } from "console";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // console.log("started");
        if (!credentials?.email || !credentials.password) {
          throw new Error("Missing credentials");
        }

        // console.log("cred found");

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // console.log("finding user");

        if (!user) {
          throw new Error("No user found");
        }

        // console.log("user found");

        const isPasswordValid = user.password === credentials.password;

        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }
        // console.log("password is valid");

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
