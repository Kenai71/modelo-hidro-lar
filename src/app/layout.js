import "./globals.css";

export const metadata = {
  title: "Hidro Lar | Encanador Profissional para Residências e Empresas",
  description:
    "Serviços de encanação profissional para residências e empresas. Instalação, manutenção, desentupimento e limpeza de caixas d'água. Atendimento rápido e com garantia.",
  keywords: "encanador, encanação, hidráulica, desentupimento, limpeza caixa d'água, hidro lar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
