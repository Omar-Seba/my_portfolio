'use client'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Link } from "next-view-transitions";
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
      className="relative w-full h-screen overflow-hidden group"

    >
      <div className='relative grid grid-cols-1 lg:grid-cols-2 w-full h-screen text-slate-100'>

        <Link href="/development">
          <motion.div
            className='flex bg-indigo-950 w-full h-full'
          >
            <motion.div onMouseEnter={() => {
              setIsHovered(true)
            }}
              onMouseLeave={() => {
                setIsHovered(false)
              }}
              initial={{
                backgroundImage: 'url(/code.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
              className="relative hover:grayscale-0 lg:block hidden bg-cover bg-center m-8 mr-4 hover:mb-[4rem] w-full duration-300 ease-in grayscale">
              {isHovered && <span
                className="-bottom-12 left-2 absolute font-mono text-xl lg:text-4xl">
                Developer
                <span className='left-0 absolute blur'>
                  Developer

                </span>
              </span>}

            </motion.div>
            {/* modible version */}
            <motion.div className="relative flex justify-center items-center lg:hidden bg-cover bg-center m-2 w-full duration-300 ease-in">
              <motion.span className="relative z-10 font-mono text-xl">
                Developer
                <span className='left-0 absolute blur'>
                  Developer

                </span>
              </motion.span>

              <div className="absolute inset-0 bg-[url('/code.jpg')] bg-cover bg-center opacity-25"></div>
            </motion.div>
          </motion.div>
        </Link>
        <Link href="/photography">
          <motion.div
            className='flex bg-indigo-950 w-full h-full'
          >
            <motion.div onMouseEnter={() => {
              setIsHovered(true)
            }}
              onMouseLeave={() => {
                setIsHovered(false)
              }}
              initial={{
                backgroundImage: 'url(/alpes.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
              className="relative hover:grayscale-0 lg:block hidden bg-cover bg-center m-8 hover:mb-[4rem] ml-4 w-full duration-300 ease-in grayscale">

              {isHovered &&
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.5
                    }
                  }}
                  className="-bottom-12 left-2 lg:absolute flex font-serif text-xl lg:text-4xl italic">
                  Photographer
                  <span className='left-0 lg:absolute flex blur'>
                    Photographer
                  </span>
                </motion.span>}
            </motion.div>
            {/* modible version */}
            <motion.div className="relative flex justify-center items-center lg:hidden bg-cover bg-center m-2 w-full duration-300 ease-in">
              <motion.span className="relative z-10 font-serif text-xl italic">
                Photographer
                <span className="left-0 absolute blur">Photographer</span>
              </motion.span>

              <div className="absolute inset-0 bg-[url('/alpes.jpg')] bg-cover bg-center opacity-25"></div>
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </div >
  );
}
