import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Claremont | Boutique Hill Retreat in Kasauli, Himachal Pradesh",
  description:
    "Experience serene mountain stays at The Claremont, Kasauli. Rooms with private balcony views, in-house restaurant, free parking, and peaceful pine-forest surroundings. Book your Kasauli getaway today.",
  keywords:
    "The Claremont Kasauli, hotel in Kasauli Himachal Pradesh, rooms with balcony in Kasauli, scenic stay in Kasauli, hotel near Manki Point, hotel near Gilbert Nature Trail, boutique hotel Kasauli, Kasauli hill retreat, Kimmughat hotel",
  authors: [{ name: "The Claremont" }],
  openGraph: {
    title: "The Claremont | Boutique Hill Retreat in Kasauli",
    description:
      "A serene mountain retreat nestled in the pine forests of Kasauli, Himachal Pradesh. Balcony rooms, scenic views, restaurant, and warm hospitality.",
    type: "website",
    locale: "en_IN",
    siteName: "The Claremont Kasauli",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Claremont | Boutique Hill Retreat in Kasauli",
    description:
      "Pine-forested calm meets curated comfort at The Claremont, Kasauli. Balcony rooms with scenic hill views.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#2C4A1E" />
      </head>
      <body className="bg-claremont-cream text-claremont-charcoal antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
