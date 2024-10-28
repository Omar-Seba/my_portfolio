'use client'
import { easeIn, motion, useAnimate, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Link } from "next-view-transitions";
import { useState } from 'react';
import { modak, passion_one } from '@/utils/fonts';
import { easeOutBack, easeOutQuint } from '@/utils/easings';
import { useRouter } from 'next/navigation';

export default function App() {


  const [scope, animate] = useAnimate();
  const router = useRouter();

  const bounceOnHover = (elt: string) => {

    animate([
      [elt, { y: 0, scale: 1 }, { ease: easeOutBack, duration: 0.2 }],
      [elt, { y: -20, scale: 0.95 }, { ease: easeOutBack, duration: 0.2 }],
      [elt, { y: 0, scale: 1 }, { ease: easeOutBack, duration: 0.2 }]
    ]);

  }

  const clickTransistion = async (elt: string) => {
    await Promise.all([
      animate(
        elt === '.photo' ? '.dev' : '.photo',
        { scale: 0.5, x: elt === '.photo' ? -10000 : 10000 },
        { ease: easeOutBack, duration: 2 }
      ),
      animate(
        elt,
        { y: 0, x: elt === '.photo' ? 10000 : -10000, scale: 5 },
        { duration: 2 }
      )
    ]);


    router.push(elt === '.photo' ? '/photography' : '/development')
  }

  return (
    <div className={`${passion_one.className}`}>
      <div className='w-full h-lvh background--custom'>
        <div ref={scope} className='flex flex-col justify-center gap-20 h-full text-6xl text-slate-900 lg:text-[167px] dev'>
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0, transition: { duration: 0.8, ease: easeOutBack } }}
            onMouseEnter={() => {
              bounceOnHover('.dev')
            }}
            onClick={() => {
              clickTransistion('.dev')
            }}
            className='flex justify-end pr-10 w-full cursor-pointer dev'>
            DEVELOPMENT
          </motion.div>
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0, transition: { duration: 0.8, ease: easeOutBack } }}
            onMouseEnter={() => {
              bounceOnHover('.photo')
            }}
            onClick={() => {
              clickTransistion('.photo')
            }}
            className='flex justify-start pl-10 w-full cursor-pointer photo'>
            PHOTOGRAPHY
          </motion.div>
        </div>
      </div>
    </div>
  );
}
