import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tarifexperts – Zahnzusatzversicherung Vergleich",
  description:
    "Vergleichen Sie deutschlandweit alle Zahnzusatzversicherungen auf dem Markt. Kostenlos, unverbindlich und auf Ihre Bedürfnisse abgestimmt.",
  keywords: [
    "Zahnzusatzversicherung",
    "Vergleich",
    "Zahnversicherung",
    "Tarife",
    "günstig",
    "Deutschland",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
