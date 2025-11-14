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
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cerebri-Sans-Pro/CerebriSansPro-HeavyItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-cerebri-sans",
});

const symphonyPro = localFont({
  src: "../../public/fonts/symphony-pro/symphony-pro-regular.otf",
  variable: "--font-symphony-pro",
  weight: "400",
  style: "normal",
});

const itcBenguiat = localFont({
  src: [
    {
      path: "../../public/fonts/itc-benguiat-std/ITCBenguiatStdBookCn.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/itc-benguiat-std/ITCBenguiatStdBookCnIt.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/itc-benguiat-std/ITCBenguiatStdMediumCn.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/itc-benguiat-std/ITCBenguiatStdMediumCnIt.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/itc-benguiat-std/ITCBenguiatStdBoldCn.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/itc-benguiat-std/ITCBenguiatStdBoldCnIt.otf",
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
