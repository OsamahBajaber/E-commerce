"use client";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { CartContext } from "./_contexts/CartContext";
import { useState } from "react";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <ClerkProvider>
      <CartContext.Provider value={{ cart, setCart }}>
        <html lang="en">
          <body className={ubuntu.className}>
            <Header />

            {children}
            <Footer />
          </body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}
