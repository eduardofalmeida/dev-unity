import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Codity Tecnologia — Talentos de Engenharia Unidos à Sua Visão",
  description:
    "A Codity Tecnologia conecta empresas a desenvolvedores altamente qualificados prontos para acelerar seus projetos de tecnologia. Staff augmentation, times dedicados e consultoria em engenharia de software.",
  keywords: [
    "outsourcing de desenvolvedores",
    "staff augmentation",
    "consultoria em tecnologia",
    "alocação de desenvolvedores",
    "times dedicados",
    "engenharia de software",
    "Codity Tecnologia",
  ],
  authors: [{ name: "Codity Tecnologia" }],
  openGraph: {
    title: "Codity Tecnologia — Talentos de Engenharia Unidos à Sua Visão",
    description:
      "Conectamos empresas a desenvolvedores altamente qualificados para acelerar sua transformação digital.",
    type: "website",
    locale: "pt_BR",
    siteName: "Codity Tecnologia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codity Tecnologia — Talentos de Engenharia Unidos à Sua Visão",
    description:
      "Conectamos empresas a desenvolvedores altamente qualificados para acelerar sua transformação digital.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-[#060D1A]`}>
        {children}
      </body>
    </html>
  );
}
