"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./components/sidebar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className="bg-background text-foreground antialiased"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <SidebarProvider>
            <AppSidebar />

            <div className="flex-1 h-[calc(100vh-17px)] bg-[var(--sidebar-background)] border border-gray-600 text-white p-4 rounded-lg">
              <div
                className="overflow-hidden h-[calc(99vh-40px)] overflow-scroll rounded-md"
                style={{ scrollMarginTop: "6rem" }}
              >
                {children}
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
