'use client'
import React from "react";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import SplitType from 'split-type'
import splitext from "@/utils/splitext";



export default function App() {

  const firstPhrase = splitext('Designing Interfaces.', "chars");
  const secondDelay = firstPhrase.length * 0.05;
  const secondPhrase = splitext("Building experiences.", "chars");
  const thirdDelay = secondDelay + (secondPhrase.length * 0.05)
  const thirdPhrase = splitext("I'm", "chars");
  const fourthDelay = thirdDelay + (thirdPhrase.length * 0.05)
  const fourthPhrase = splitext("Omar SEBA.", "chars");


  return (
    <main className="flex flex-col justify-between items-center pt-20 min-h-screen">
      <div className="font-Space_Grotesk">
        <section className="flex flex-col">
          <span>
            {/* <h1 className="pb-1 font-bold text-4xl text-lef md:text-5xl">Designing Interfaces,<br /> Building Experiences.</h1> */}
            <span>
              {firstPhrase.map((line, index) => (
                <motion.span key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="pb-1 font-bold text-4xl text-left lg:text-5xl">{line}</motion.span>
              ))}
              <br />
              {secondPhrase.map((line, index) => (
                <motion.span key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: secondDelay + index * 0.05 }}
                  className="pb-1 font-bold text-4xl text-left lg:text-5xl">{line}</motion.span>
              ))}
              <br />
              {thirdPhrase.map((line, index) => (
                <motion.span key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: thirdDelay + index * 0.05 }}
                  className="pb-1 font-bold text-4xl text-left lg:text-5xl">{line}</motion.span>
              ))}
              <span className="pl-2">
                {fourthPhrase.map((line, index) => (
                  <motion.span key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: fourthDelay + index * 0.05 }}
                    className="inline-block pb-1 font-bold text-4xl text-green-200 text-left lg:text-5xl">{line}</motion.span>
                ))}
              </span>
            </span>
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
