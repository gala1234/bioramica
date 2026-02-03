import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { AppProvider } from "@/context/AppContext";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";


const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Bioramica - Ingeniería Cerámica",
  description: "Datos que certifican la materia. Colección de piezas cerámicas con registro técnico y de mercado.",
  keywords: ["cerámica", "ingeniería", "arte", "escultura", "joyería", "autenticidad"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <AppProvider>
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
                style={{ backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC0ydjRoMnY0aDJ2LTRoMnYtNGgtMnpNMzYgMzRWMzZoNHYtMmgtNHptMCAwdjRoMnYtNGgtMnoiIGZpbGw9IiNjNGE0ODQiLz48L2c+PC9zdmc+')` }}
            >
            </div>
            <Navbar />
                  <CartDrawer />
            {children}
      <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
