import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import AuthServices from "../../../services/AuthServices";

const providers = [
  CredentialsProvider<{
    username: { label: string; type: string };
    password: { label: string; type: string };
  }>({
    credentials: {
      username: { label: "Username", type: "text" },
      password: { label: "Password", type: "password" },
    },
    id: "credentials",
    type: "credentials",
    name: "Credentials",
    authorize: async (credentials) => {
      try {
        const user = await AuthServices.login({
          username: credentials!.username,
          password: credentials!.password,
        });
        if (!user) {
          return user;
        }
        return null;
      } catch (e) {
        return null;
      }
    },
  }),
];

export default NextAuth({
  providers,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
      }

      return token;
    },
    session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
