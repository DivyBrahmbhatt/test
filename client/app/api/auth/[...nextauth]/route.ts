import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authOptions = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
});
export { authOptions as GET, authOptions as POST };
