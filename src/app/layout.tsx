import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Omar SEBA's Portfolio",
  description: "Frontend Developer & Photographer",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className="bg-[url('/mesh-gradient.png')] bg-backgronud bg-cover bg-center h-screen overflow-hidden"
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
