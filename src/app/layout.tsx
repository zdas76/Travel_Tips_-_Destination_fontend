import type { Metadata } from "next";
import "./globals.css";
import Provider from "../lib/Provider";
import Navber from "@/components/shared/Navber";

export const metadata: Metadata = {
  title: "Mrinals Travel Tips & Destination Guides",
  description: "Mrinals Travel Tips & Destination Guides",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Provider>
          <Navber />
          {children}
        </Provider>
      </body>
    </html>
  );
}
