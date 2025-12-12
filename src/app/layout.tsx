import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
// import { TopNav } from "@/components/layout/TopNav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Write-ups | Cyber Security",
  description: "Professional Security Research & Write-ups",
};

import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { TopNav } from "@/components/layout/TopNav";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} antialiased font-sans bg-background text-foreground flex flex-col items-center`}
      >
        <LanguageProvider>
          <main className="min-h-screen">
            <TopNav />
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
