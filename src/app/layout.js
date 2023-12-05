// RootLayout.js

import { Montserrat } from "next/font/google";
import "./globals.css"; // Importa tus estilos globales
import NavBar from "./components/NavBar";
import SessionProvider from "./Provider/SessionProvider";
import { AuthContextProvider } from "./Provider/AuthContext";
import { CategoriesProvider } from "./Provider/CategoriesContext";
import Menu from "./components/Menu";

const monsterrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "ITEChannel",
  description: "Foro de noticias para alumnos del ITE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monsterrat.className}>
        <AuthContextProvider>
          <SessionProvider>
            <CategoriesProvider>
              <div className="lg:hidden flex">
                <Menu />
              </div>
              <div className="lg:flex hidden">
                <NavBar />
              </div>
              {children}
            </CategoriesProvider>
          </SessionProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
