import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/content/site";
import "./globals.css";

const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-jost" });

export const metadata: Metadata = {
  title: { default: `${site.name} | Tree-free handmade paper from Kanha`, template: `%s · ${site.name}` },
  description:
    "Aditi Paperie makes tree-free, chemical-free, archival handmade paper at Kanha Shanti Vanam: paper, diaries, décor, workshops and a papermaking academy.",
  icons: { icon: "/brand/logo-mark.svg" },
};

export const viewport: Viewport = { themeColor: "#FAF8F3" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jost.variable}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <SmoothScroll />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
