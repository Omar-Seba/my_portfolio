'use client'
import { delay, motion, useAnimate } from "framer-motion";
import { Link } from "next-view-transitions";
import splitext from "@/utils/splitext";
import { use, useEffect } from "react";




export const HeroSection = () => {

    const [scope, animate] = useAnimate();
    const firstPhrase = splitext('Designing Interfaces.', "chars");
    const secondDelay = firstPhrase.length * 0.03;
    const secondPhrase = splitext("Building experiences.", "chars");
    const thirdDelay = secondDelay + (secondPhrase.length * 0.03)
    const thirdPhrase = splitext("I'm", "chars");
    const fourthDelay = thirdDelay + (thirdPhrase.length * 0.03)
    const fourthPhrase = splitext("Omar SEBA.", "chars");

    useEffect(() => { }, [scope, animate]);

    return (
        <section className="flex flex-col gap-1 text-4xl lg:text-6xl">
            {/* <h1 className="pb-1 font-bold text-4xl text-lef md:text-5xl">Designing Interfaces,<br /> Building Experiences.</h1> */}
            <span className="flex flex-col gap-0.5">
                <span>
                    {firstPhrase.map((char, index) => (
                        <motion.span key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.03 }}>
                            {char}
                        </motion.span>
                    ))}
                </span>
                <span>

                    {secondPhrase.map((char, index) => (
                        <motion.span key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: secondDelay + index * 0.03 }}
                            className="text-left">{char}</motion.span>
                    ))}
                </span>
                <span>

                    {thirdPhrase.map((char, index) => (
                        <motion.span key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: thirdDelay + index * 0.03 }}
                            className="text-left">{char}</motion.span>
                    ))}
                    <span className="pl-2">
                        {fourthPhrase.map((char, index) => (
                            <motion.span key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: fourthDelay + index * 0.04 }}
                                className="inline-block text-green-200 text-left">
                                {char === " " ? '\u00A0' : char}
                            </motion.span>
                        ))}
                    </span>
                </span>
            </span>
            <motion.button
                className="flex flex-col justify-center items-center pt-24 w-full h-full text-2xl lg:text-4xl underline-offset-4"
                initial={{ scale: 0.5, opacity: 0, y: -10 }}
                transition={{ delay: fourthDelay + fourthPhrase.length * 0.04, duration: 0.6 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={
                    {
                        scale: 1.1,
                    }}
            >
                <Link
                    onMouseEnter={() => {
                        animate(scope.current, {
                            opacity: 1,
                            width: ['1rem', '4rem', '6rem', '8rem', '11rem', '13rem', '16rem'],
                            x: ['-13rem', '-11rem', '-8rem', '-6rem', '-4rem', '0rem']
                        },
                            { duration: 0.2 },)
                    }}
                    onMouseLeave={() => {
                        animate(scope.current, {
                            opacity: 0,
                            width: ['16rem', '13rem', '11rem', '8rem', '6rem', '4rem', '1rem'],
                            x: ['0rem', '4rem', '6rem', '8rem', '11rem', '13rem', '16rem'],
                        }, { duration: 0.5 })
                    }}
                    className="relative"
                    href="https://drive.google.com/file/d/1oxqGlr5wB361SV3CEu6PtujAS2qiIzl5/view?usp=sharing">
                    My experience
                </Link>
                <motion.div
                    ref={scope}
                    initial={{ opacity: 1, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="border-green-200 bg-green-200 w-4 lg:w-4 h-1"
                >

                </motion.div>
            </motion.button>
        </section>
    )

}