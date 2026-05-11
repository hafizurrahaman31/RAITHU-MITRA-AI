import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raithu Mitra AI",
  description: "AI-powered smart farming assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <main
          className="
    min-h-screen
    bg-[#F8F5F0]
    flex
    justify-center
  "
        >
          <div
            className="
      relative
      w-full
      max-w-sm
      min-h-screen
      bg-white
      pb-24
    "
          >
            {children}

            <Navbar />
          </div>
        </main>
      </body>
    </html>
  );
}
