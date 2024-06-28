import type { Metadata } from "next";
import { fira_code } from "./fonts";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useUserStore } from "@/stores/user-store";
import { getUserInfo } from "@/api/getUser";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "My portfolio",
  description: "A portfolio 100% linked with the github",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userData = await getUserInfo();
  if ("user" in userData) useUserStore.setState({ user: userData.user });

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
