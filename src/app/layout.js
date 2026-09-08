import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kawser | Software Engineer Portfolio",
  description:
    "Portfolio of Kawser, a Software Engineering student and full-stack developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="light">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
