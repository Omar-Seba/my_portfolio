'use client'
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const MeSection = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })



    useEffect(() => {

        if (isInView) {
            animate(ref.current, {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1,
                    delay: 0.5,
                    ease: "easeInOut"
                }

            })
        }
    }, [isInView])

    return (
        <motion.section
            id="my-stack"
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            className="flex flex-col justify-center items-start gap-10 bg-emerald-300 opacity-75 px-4 xl:px-40 py-36 snap-center w-full h-dvh font-bold text-slate-950 lg:text-6xl">
            <span>
                ReacJS
            </span>
            <span>
                Typescript
            </span>
            <span>
                CSS - Sass - Tailwind
            </span>
            <span>
                Figma
            </span>
        </motion.section>
    )
}