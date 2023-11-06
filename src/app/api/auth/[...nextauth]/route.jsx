import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      (session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase()),
        (session.user.uid = token.sub);
      return session;
    },
  },
});
export { handler as GET, handler as POST };