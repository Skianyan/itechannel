import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import SessionProvider from "./Provider/SessionProvider";
import { AuthContextProvider } from "./Provider/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "ITEChannel",
	description: "Foro de noticias para alumnos del ITE",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthContextProvider>
					<SessionProvider>
						<NavBar />
						{children}
					</SessionProvider>
				</AuthContextProvider>
			</body>
		</html>
	);
}
