// pages/_app.js

import { AuthProvider } from "@/app/Provider/AuthContext";

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
