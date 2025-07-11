import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Noah Hamid - Frontend Developer Portfolio",
  description:
    "Professional frontend developer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects and get in touch.",
  keywords:
    "frontend developer, React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, web developer",
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "Noah Hamid- Frontend Developer Portfolio",
    description:
      "Professional frontend developer portfolio showcasing modern web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
