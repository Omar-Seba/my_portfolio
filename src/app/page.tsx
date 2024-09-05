'use client'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Link from "next/link";
import { useState } from 'react';


export default function App() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 200 : 100
  const handleMouseMove = ({ clientX, clientY, currentTarget }: any) => {
    // current target might be null
    const bounds = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - bounds.left);
    mouseY.set(clientY - bounds.top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      key={1}
      className="relative bg-[url(/mesh-gradient.png)] bg-cover p-5 md:p-8 w-full h-screen overflow-hidden group"

    >
      <motion.div
        className="absolute -inset-px opacity-0 group-hover:opacity-100 rounded-3xl transition duration-300"
        transition={{
          type: "tween", ease: "backOut"
        }}
        style={{
          background: useMotionTemplate`radial-gradient(${size}px circle at ${mouseX}px ${mouseY}px, rgb(1 136 255 / 0.15) 0%, transparent 80%)`,
          transition: 'type: "tween", ease: "backOut", duration: 0.5'
        }}
      />
      <div className='grid grid-cols-2 h-screen'>

        <Link href="/development">

          <div className="flex justify-center items-center w-full h-full">
            <span onMouseEnter={() => {
              setIsHovered(true)
            }}

              onMouseLeave={() => {
                setIsHovered(false)
              }}
              className="relative flex font-mono text-xl md:text-4xl">
              Developer
              <span className='absolute flex blur'>
                Developer

              </span>
            </span>

          </div>
          {/* </motion.div> */}
        </Link>
        <Link href="/photography">
          {/* <motion.div
            className="relative flex justify-center items-center bg-opacity-50 bg-cover bg-center h-full"
          > */}
          <div className="flex justify-center items-center w-full h-full">
            <span className="font-serif text-white text-xl md:text-4xl italic"
              onMouseEnter={() => {
                setIsHovered(true)
              }}
              onMouseLeave={() => {
                setIsHovered(false)
              }}
            >
              <motion.span className="relative flex"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.5
                  }
                }}
              >
                Photographer
                <span className="absolute flex blur">
                  Photographer
                </span>
              </motion.span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
