import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import { NavBar, NavButton } from "@/components/NavLink";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mr.Slikes - Photography Portfolio",
  description: "Photographer since 2014, specialized in automotive photography.",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className="bg-cover bg-center w-full h-screen overflow-hidden"
        style={{ backgroundImage: "url('/effeil_wide.png')" }}
      >
        <header className="flex justify-center">
          <nav className="flex flex-grow justify-between items-center px-2 max-lg:px-8 max-w-screen-xl h-24 text-white">
            <div className="flex items-center h-[48px] text-base">
              <Image src="/LOGo.png" alt="Logo" width={160} height={140} />
            </div>
            <div className="max-lg:hidden">

              <NavBar />
            </div>

            <div className="flex gap-3">
              <a href="https://www.flickr.com/photos/163941199@N02/">
                <Image src="/social/flickr.svg" alt="search" width={20} height={20} />
              </a>

              <a href="https://www.instagram.com/mr.slikesauto/">
                <Image src="/social/instagram.svg" alt="search" width={20} height={20} />
              </a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Mr.Slikes</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
