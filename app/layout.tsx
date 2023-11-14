import ActiveStatus from "./components/ActiveStatus";
import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sovet",
  description: "Особистий простір для приватного спілкування компанії. ©️Sovet",

  openGraph: {
    title: "SOVET",
    description: "Особистий простір для приватного спілкування компанії. ©️Sovet",
    url: "https://messenger-clone-eta-dusky.vercel.app/",
    siteName: "SOVET",
    images: [
      {
        url: "https://messenger-clone-eta-dusky.vercel.app/images/sovet.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://messenger-clone-eta-dusky.vercel.app/images/sovet.png",
        width: 1800,
        height: 1600,
        alt: "Sovet",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
