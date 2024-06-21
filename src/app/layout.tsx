import type { Metadata } from "next";
import { fira_code } from "./fonts";

import Header from "@/components/header";
import Footer from "@/components/footer";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "My portfolio",
  description: "A portfolio 100% linked with the github",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="container py-10">
      <body className={fira_code.className + " bg-slate-900"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
