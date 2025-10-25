"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <LanguageProvider>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  );
}
