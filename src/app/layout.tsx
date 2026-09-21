import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import BookDataProvider from "@/context/BookDataProvide";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Vibe",
  description: "Book Vibe- Know Book and Learn something new about you",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
    data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <BookDataProvider>
        <body className={`min-h-full flex flex-col`}>
          <NavBar />
          {children}
        </body>
      </BookDataProvider>
    </html>
  );
}
