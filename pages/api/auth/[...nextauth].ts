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
        const res = (function () {
          let value;
          switch (password) {
            case process.env.SECRET_ACCESS_PASSWORD:
              value = { id: "user", name: "basic" };
              break;
            case process.env.SECRET_ADMIN_PASSWORD:
              value = { id: "user", name: "admin" };
              break;
            default:
              value = null;
              break;
          }
          return value;
        })();
        return res;
      },
    }),
  ],
};

export default NextAuth(authOptions);
