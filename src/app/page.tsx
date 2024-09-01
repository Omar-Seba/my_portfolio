'use client'
import React from "react";
import { motion } from 'framer-motion';
import Link from "next/link";

export default function App() {
  return (
    <main className="grid grid-cols-2 h-screen">
      <motion.div
        className="relative flex justify-center items-center bg-opacity-50 bg-cover bg-center h-full"
        initial={{
          backgroundImage: "url('')",  // Initially no background
          backgroundSize: "100%",
          opacity: 1,  // Ensure the title is always visible
          x: 0
        }}
        whileHover={{
          backgroundImage: "url('/code.jpg')",
          backgroundSize: "105%",
          transition: { duration: 0.5, ease: "easeInOut" }
        }}
      >
        <div className="flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 w-full h-full">
          <span className="font-mono text-white text-xl">Developer</span>

        </div>
      </motion.div>
      <Link href="/photography">
        <motion.div
          className="relative flex justify-center items-center bg-opacity-50 bg-cover bg-center h-full"
          initial={{
            backgroundImage: "url('')",  // Initially no background
            backgroundSize: "100%",
            opacity: 1,  // Ensure the title is always visible
            x: 0
          }}
          whileHover={{
            backgroundImage: "url('/photo.jpg')",
            backgroundSize: "105%",
            transition: { duration: 0.5, ease: "easeInOut" }

          }}
        >
          <div className="flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 w-full h-full">
            <span className="font-serif text-white text-xl italic">

              Photographer

            </span>

          </div>
        </motion.div>
      </Link>
    </main>
  );
}
