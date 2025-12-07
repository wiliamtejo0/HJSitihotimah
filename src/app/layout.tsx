import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HJ. SITI HOTIMAH - Perdagangan Pupuk & Pemberantas Hama Terpercaya",
  description: "Mitra andal petani Indonesia. Menyediakan pupuk berkualitas tinggi dan pestisida efektif untuk hasil panen yang maksimal dan berkelanjutan.",
  keywords: ["HJ. SITI HOTIMAH", "pupuk", "pestisida", "pemberantas hama", "pertanian", "Sampang", "Jawa Timur"],
  authors: [{ name: "HJ. SITI HOTIMAH" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "HJ. SITI HOTIMAH - Perdagangan Pupuk & Pemberantas Hama",
    description: "Mitra andal petani Indonesia. Menyediakan pupuk berkualitas tinggi dan pestisida efektif.",
    url: "https://hjsitihotimah.com",
    siteName: "HJ. SITI HOTIMAH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HJ. SITI HOTIMAH - Perdagangan Pupuk & Pemberantas Hama",
    description: "Mitra andal petani Indonesia. Menyediakan pupuk berkualitas tinggi dan pestisida efektif.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
