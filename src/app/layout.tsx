import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aese.io — Secure Digital Ecosystems",
  description:
    "Adewale Agbabiaka — Cybersecurity, DevSecOps, and AI/AIOps. Premium security engineering for teams that can't afford to get it wrong.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 pt-[81px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
