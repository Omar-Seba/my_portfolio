import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import splitext from "@/utils/splitext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omar SEBA - Development Portfolio",
  description: "Frontend Developer specialized in ReactJS, Typescript, CSS, Tailwind, Framer Motion and Figma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-900 w-full h-auto font-bold font-Space_Grotesk">
          <header className="px-4 lg:px-52 w-full">
            <nav className="flex flex-grow justify-between items-center h-24 text-white">
              <div className="flex items-center h-[48px] font-bold text-3xl">
                {splitext("omarseba", "chars").map((char, index) => {
                  return (
                    <span key={index} className={char === 's' || char === 'o' ? "text-green-200" : ""} >
                      {char}
                    </span>
                  );
                })}
              </div>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/omar-seba/">
                  <Image src="/social/icon-linkedin.svg" alt="linkedin" width={20} height={20} />
                </a>
                <a href="https://github.com/Omar-Seba">
                  <Image src="/social/github/github-mark-white.svg" alt="github" width={20} height={20} />
                </a>
              </div>
            </nav>
          </header>

          {/* Main content */}
          <main>{children}</main>

          {/* Footer */}
          <footer>
            <hr className="border-1 border-violet-50 mx-auto my-10 w-2/3" />
            <div className="mx-auto px-4 sm:px-6 md:px-8 divide-violet-50 max-w-5xl xl:max-w-5xl">
              <div className="flex flex-row-reverse bg-top pt-5 pb-4">
                <a
                  href="/"
                  className="font-bold text-gray-200 text-md hover:text-white hover:text-deep-purple-accent-400 tracking-tight transition-colors duration-300"
                >
                  © 2024 OmarSEBA
                </a>
              </div>
            </div>
          </footer>
        </div>


      </body>
    </html>
  );
}
