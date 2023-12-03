import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "ITEChannel",
	description: "Foro de noticias para alumnos del ITE",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavBar />
				<SessionProvider>{children}</SessionProvider>
			</body>
		</html>
	);
}
