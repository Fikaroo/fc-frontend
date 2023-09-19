import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import UrqlWrapper from "@/lib/urql-wrapper";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/components/ModeToggle";
const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreshCard",
  description: "Selling fresh products website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed z-[9999] w-fit right-5 top-3">
            <ModeToggle />
          </div>
          <UrqlWrapper>
            <div className="container relative flex flex-col justify-center min-h-screen">
              {children}
            </div>
          </UrqlWrapper>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
