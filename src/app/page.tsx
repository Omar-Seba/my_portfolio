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
      <div className='relative grid grid-cols-2 w-full h-screen'>

        <Link href="/development">
          <motion.div
            className='flex bg-gradient-to-r from-fuchsia-900 via-purple-900 to-indigo-900 w-full h-full'
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
              className="relative hover:grayscale-0 bg-cover bg-center m-2 hover:mb-[4rem] w-full duration-300 ease-in grayscale">
              {isHovered && <span
                className="-bottom-12 left-2 absolute font-mono text-xl md:text-4xl">
                Developer
                <span className='left-0 absolute blur'>
                  Developer

                </span>
              </span>}

            </motion.div>
          </motion.div>
        </Link>
        <Link href="/photography">
          <motion.div
            className='flex bg-gradient-to-r from-indigo-900 via-blue-900 to-sky-900 w-full h-full'
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
              className="relative hover:grayscale-0 bg-cover bg-center m-2 hover:mb-[4rem] w-full duration-300 ease-in grayscale">

              {isHovered &&
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.5
                    }
                  }}
                  className="-bottom-12 left-2 absolute font-serif text-xl md:text-4xl italic">
                  Photographer
                  <span className='left-0 absolute blur'>
                    Photographer
                  </span>
                </motion.span>}
            </motion.div>
          </motion.div>
          {/* </motion.div> */}
        </Link>
      </div>
    </div >
  );
}
