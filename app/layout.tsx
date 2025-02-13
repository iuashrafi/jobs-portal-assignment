import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jobs Portal",
  description: "Developed By Imtiaz uddin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${poppins.className} antialiased`}
      >
        <Navbar />
        <div className="container mx-auto p-4 md:p-4 lg:p-6 mt-4 sm:mt-6 md:mt-8">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
