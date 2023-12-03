import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
	// Configure one or more authentication providers
	pages: {
		signIn: "/signin",
	},
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {},
			async authorize(credentials) {
				const user = JSON.parse(credentials.user);
				if (user) {
					return user;
				}
				return null;
			},
		}),
	],
};
export default NextAuth(authOptions);
