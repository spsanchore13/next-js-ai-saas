import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });
import { ClerkProvider } from "@clerk/nextjs";
import { ToasterProvider } from "@/components/toaster-provider";
import { CrispProvider } from "@/components/crisp-provider";
import { ModalProvider } from "@/components/modal-provider";

export const metadata: Metadata = {
  title: "Genius",
  description: "AI Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <CrispProvider />
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
