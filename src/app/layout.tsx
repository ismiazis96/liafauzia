import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lia Fauziyyah A., S.H., M.H. | Akademisi, MC, & Research Assistant",
  description: "Portofolio profesional Lia Fauziyyah A., S.H., M.H. - Seorang akademisi hukum, MC profesional, dan research assistant yang berdedikasi melayani jasa mentoring skripsi, MC wedding, dan riset hukum.",
  keywords: ["Lia Fauziyyah", "Akademisi Hukum", "MC Pernikahan", "Research Assistant", "Mentoring Skripsi", "Hukum Indonesia", "MC Profesional"],
  authors: [{ name: "Lia Fauziyyah A." }],
  openGraph: {
    title: "Lia Fauziyyah A., S.H., M.H. | Akademisi, MC, & Research Assistant",
    description: "Portofolio profesional Lia Fauziyyah A., S.H., M.H. - Dedikasi dalam Hukum dan Komunikasi.",
    url: "https://liafauziyyah.com",
    siteName: "Lia Fauziyyah Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lia Fauziyyah A., S.H., M.H. | Akademisi, MC, & Research Assistant",
    description: "Portofolio profesional Lia Fauziyyah A., S.H., M.H.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary/10 selection:text-primary min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
