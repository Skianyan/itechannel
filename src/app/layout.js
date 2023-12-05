import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import SessionProvider from "./Provider/SessionProvider";
import { AuthContextProvider } from "./Provider/AuthContext";
import { CategoriesProvider } from "./Provider/CategoriesContext";
import Menu from "./components/Menu";

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
						<CategoriesProvider>
							<div className="lg:hidden flex">
								<Menu />
							</div>
							{children}
						</CategoriesProvider>
					</SessionProvider>
				</AuthContextProvider>
			</body>
		</html>
	);
}
