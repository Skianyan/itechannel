import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth as auth } from "firebase/auth";

export const authOptions = {
	// Configure one or more authentication providers
	pages: {
		signIn: "/signin",
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {},
			async authorize(credentials) {
				return await signInWithEmailAndPassword(
					auth,
					credentials.email || "",
					credentials.password || ""
				)
					.then((userCredential) => {
						if (userCredential.user) {
							return userCredential.user;
						}
						return null;
					})
					.catch((error) => console.log(error))
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						console.log(error);
					});
			},
		}),
	],
};
export default NextAuth(authOptions);
