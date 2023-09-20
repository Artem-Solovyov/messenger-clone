import ToasterContext from "./context/ToasterContext";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sovet",
  description: "Sovet Messenger",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
