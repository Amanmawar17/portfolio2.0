import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "../app/components/Theme-Provider";

import { Raleway, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./loading";
import { Suspense } from "react";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-rale",
  weight: "400",
});
const noto = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: "400",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: "Aman Mawar Portfolio",
  description:
    "Hey guys, My name is Aman Mawar, I am full stack developer based in India. developing Saas Application, Chat Bot, Extensions and Npm packages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Aman Mawar" />
        <meta
          name="description"
          content="I am Aman Mawar a Software Developer from Rajasthan India and developing Saas Applicaitions, Chat Bot, Extensions and Npm packages. I am havign expertise in Frontend development and as well as in Backend Development, looking forward to learn new things."
        />
        <meta
          name="keywords"
          content="Aman Mawar, amanmawar, Amanmawar, aman mawar"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="Aman Mawar" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aman-mawar.vercel.app" />
        <meta property="og:title" content="Aman Mawar" />
        <meta
          property="og:description"
          content="I am Aman Mawar a Software Developer from India and developing Saas Applicaitions, Chat Bot, Extensions and Npm packages, also as a freelancer. I am havign expertise in Frontend development and as well as in Backend Development, looking forward to learn new things."
        />
        <meta
          property="og:image"
          content="https://aman-mawar.vercel.app/banner.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aman-mawar.vercel.app" />
        <meta property="twitter:title" content="Aman Mawar" />
        <meta
          property="twitter:description"
          content="I am Aman Mawar a Software Developer from India and developing Saas Applicaitions, Chat Bot, Extensions and Npm packages, also as a freelancer."
        />
        <meta
          property="twitter:image"
          content="https://aman-mawar.vercel.app/banner.png"
        />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`${noto.variable} ${raleway.variable}`}>
        <Analytics />
        <SpeedInsights />
          <Suspense fallback={<Loading />}>
            <Navbar />
            {children}
            <Footer />
          </Suspense>
      </body>
    </html>
  );
}
