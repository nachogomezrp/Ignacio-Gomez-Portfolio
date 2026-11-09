import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const title = "Ignacio Gómez — Backend Developer | Java";
const description =
  "Estudiante avanzado de Licenciatura en Sistemas (UNLa) orientado al desarrollo backend con Java. Buenos Aires, Argentina.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_AR",
    siteName: "Ignacio Gómez",
  },
};

export const viewport: Viewport = { themeColor: "#050505" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-ink font-sans antialiased">{children}</body>
    </html>
  );
}
