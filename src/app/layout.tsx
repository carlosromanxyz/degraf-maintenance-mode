import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DEGRAF - Sitio en Mantención",
  description: "Sitio en Mantención",
  openGraph: {
    title: "DEGRAF - Sitio en Mantención",
    description: "Sitio en Mantención",
    url: "https://degraf.cl",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
