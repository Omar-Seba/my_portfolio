'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";



export default function App() {


  return (
    <main className="flex flex-col justify-between items-center pt-20 min-h-screen">
      <div className="font-Space_Grotesk">
        <section className="flex flex-col">
          <span>
            <h1 className="pb-1 font-bold text-4xl text-lef md:text-5xl">Nice to meet you!</h1>
            <h1 className="relative flex font-bold text-4xl text-left md:text-5xl">{"I'm"}
              <span className="pl-2 text-green-200">Omar Seba</span>.
            </h1>
          </span>
          <motion.button className="pt-20 text-2xl underline underline-offset-4 decoration-green-300" initial={{ scale: 1 }} whileHover={
            {
              scale: 1.1,
            }}>

            <Link href="https://drive.google.com/file/d/1oxqGlr5wB361SV3CEu6PtujAS2qiIzl5/view?usp=sharing">
              My experience
            </Link>
          </motion.button>
        </section>
      </div>
    </main>
  );
}
