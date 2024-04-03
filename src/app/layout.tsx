import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@src/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          `relative h-full font-sans antialiased `,
          inter.className
        )}
      >
        <div className=""></div>
        <main className="relative flex flex-col min-h-screen ">
          <div className="flex-1 flex-grow ">{children}</div>
        </main>
      </body>
    </html>
  );
}
