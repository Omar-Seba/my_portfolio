'use client'
import { motion } from "framer-motion";

export const MeSection = () => {

    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            transition={{ delay: 2, duration: 1 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col justify-center items-start gap-10 bg-emerald-300 opacity-75 px-4 xl:px-40 py-36 snap-center w-full h-fit text-4xl text-slate-950 lg:text-6xl">
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