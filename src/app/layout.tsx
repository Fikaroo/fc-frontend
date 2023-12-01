import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ApolloWrapper } from "@/lib/apollo-wrapper";

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
          <ApolloWrapper>
            <div className="container relative flex flex-col justify-center min-h-screen">
              {children}
            </div>
          </ApolloWrapper>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
