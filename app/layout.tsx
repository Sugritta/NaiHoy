import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google"; // 1. เพิ่ม Kanit ตรงนี้
import "./globals.css";
import Provider from "./provider";
import Header from "./_components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "./ConvexClientProvider"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. ตั้งค่าฟอนต์ภาษาไทย (Kanit)
const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "เพื่อนพาเที่ยว",
  description: "เว็บไซต์ช่วยวางแผนการท่องเที่ยวในประเทศไทย",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} font-kanit antialiased`}>
        <ClerkProvider>
          <ConvexClientProvider>
            <Provider>
              <Header />
              {children} 
            </Provider>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}