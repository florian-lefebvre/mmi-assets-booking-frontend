import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const { password } = credentials;
        if (password === process.env.SECRET_ACCESS_PASSWORD) {
          return { id: "user" };
        } else {
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
