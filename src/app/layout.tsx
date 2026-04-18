import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: "https://nikel-portfolio.vercel.app",
  title: "Ninad Ketkale | UX/UI Designer",
  description: "UX/UI Designer based in Belgium, crafting user-centric digital experiences.",
  icons: {
    icon: "/saturn.svg",
  },
  openGraph: {
    title: "Ninad Ketkale | UX/UI Designer",
    description: "UX/UI Designer based in Belgium, crafting user-centric digital experiences.",
    url: "https://nikel-portfolio.vercel.app/",
    siteName: "Ninad Ketkale",
    locale: "en_BE",
    type: "website",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.scrollTo(0, 0); Object.defineProperty(document, 'ready', { get: () => () => { scrollTo(0, 0); } });`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}