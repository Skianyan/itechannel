// pages/_app.js

import { AuthContextProvider } from "@/app/Provider/AuthContext";

function MyApp({ Component, pageProps }) {
	return (
		<AuthContextProvider>
			<Component {...pageProps} />
		</AuthContextProvider>
	);
}

export default MyApp;
