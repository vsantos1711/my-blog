import type { Metadata } from "next";
import { fira_code } from "./fonts";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "../styles/globals.css";
import { useUserStore } from "@/stores/user-store";
import { getUserInfo, IUser } from "@/api/getUser";

export const metadata: Metadata = {
  title: "My portfolio",
  description: "A portfolio 100% linked with the github",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userData = await getUserInfo();

  if ("error" in userData) {
    console.error("Failed to fetch user info");
    return <div>Failed to fetch user info</div>;
  }

  useUserStore.setState({ user: userData.user });

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
