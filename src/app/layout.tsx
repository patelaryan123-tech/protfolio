import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Patel | Software & ML Engineer Portfolio",
  description: "Personal portfolio of Aryan Patel, a passionate Software Engineer and Machine Learning Engineer specializing in AI and web development.",
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
      style={{ backgroundColor: '#050816', colorScheme: 'dark' }}
    >
      <body 
        className="min-h-full flex flex-col bg-[#050816] text-white"
        style={{ backgroundColor: '#050816', color: 'white' }}
      >
        {children}
      </body>
    </html>
  );
}
