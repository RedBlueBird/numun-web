import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const cerebriSans = localFont({
  src: [
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-ExtraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-Heavy.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Cerebri-Sans-Pro/CerebriSansPro-HeavyItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-cerebri-sans",
});

const symphonyPro = localFont({
  src: "../fonts/symphony-pro/symphony-pro-regular.otf",
  variable: "--font-symphony-pro",
  weight: "400",
  style: "normal",
});

const itcBenguiat = localFont({
  src: [
    {
      path: "../fonts/ITC-Benguiat-Std/ITCBenguiatStdBookCn.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ITC-Benguiat-Std/ITCBenguiatStdBookCnIt.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/ITC-Benguiat-Std/ITCBenguiatStdMediumCn.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ITC-Benguiat-Std/ITCBenguiatStdMediumCnIt.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/ITC-Benguiat-Std/ITCBenguiatStdBoldCn.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/ITC-Benguiat-Std/ITCBenguiatStdBoldCnIt.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-itc-benguiat",
});

export const metadata: Metadata = {
  title: "NUMUN 2026 - Nagoya University Model United Nations",
  description: "Nagoya University Model United Nations 2026 - Driving growth, elevating impact. Join us for an inspiring conference fostering global dialogue and youth leadership.",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${cerebriSans.variable} ${symphonyPro.variable} ${itcBenguiat.variable} antialiased`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
