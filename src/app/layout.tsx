import type { Metadata } from "next";
import { Roboto, Bree_Serif } from "next/font/google";
import "./globals.css";


export const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", '300', '400', '500', '700', '900']
})

export const bree = Bree_Serif({
  subsets: ['latin'],
  weight: ["400"]
})

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
    <html lang="en">
      <body
        className={`${roboto.className}  ${bree.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
