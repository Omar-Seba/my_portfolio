import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Omar SEBA's Portfolio",
  description: "Frontend Developer & Photographer",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ViewTransitions>

      <html lang="en">
        <body>
          {children}
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;
