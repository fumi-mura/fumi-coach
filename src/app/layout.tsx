import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-noto-serif",
  display: "swap",
  preload: false,
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
  preload: false,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "fumi coaching | キャリア・ライフコーチング",
  description:
    "自分らしい未来へ。fumiのコーチングで、あなたの可能性を引き出します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
