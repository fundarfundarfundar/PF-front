import type { Metadata } from "next";
import { Poppins, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const proximaNova = Poppins({
  variable: "--font-proxima",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const kazimir = Merriweather({
  variable: "--font-kazimir",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fund.ar",
  description: "Plataforma de donaciones para proyectos con fines sociales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          className={`${proximaNova.variable} ${kazimir.variable} antialiased`}
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
