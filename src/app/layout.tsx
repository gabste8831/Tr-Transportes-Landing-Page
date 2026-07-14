import type { Metadata } from "next";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vicente Transportes | Logística Regional no Alto Vale do Itajaí",
  description:
    "Soluções logísticas sob medida em Rio do Sul - SC. Cargas fracionadas, cargas completas, logística reversa e parcerias de longo prazo com cobertura de 150km no Alto Vale do Itajaí.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
