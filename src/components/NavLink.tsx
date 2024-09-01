'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { motion } from "framer-motion";
import { isatty } from 'tty';


type NavLinkProps = {

    href: string;
    label: string;
    disabled?: boolean;
};

export const NavBar: React.FC<{}> = ({ }) => {
    return <>
        <motion.div

            className="inline-flex gap-8 border-0 hover:border-y-1 hover:border-cyan-200 p-1 hover:border-opacity-30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
        >


            <NavButton text="home" href="/photography" />
            <NavButton text="about" href="/about" disable />
            <NavButton text="project" href="/project" disable />
            <NavButton text="contact" href="/contact" disable />
        </motion.div>
        <motion.div

        >

        </motion.div>
    </>
}

export const NavButton: React.FC<{ text: string; href: string; disable?: boolean }> = ({ text, href, disable }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} passHref aria-disabled={disable} className={disable ? "pointer-events-none " : ""} >
            <motion.div

                transition={{ duration: 0.3 }}
                whileTap={{ scale: 0.8 }}
                whileHover={{
                    scale: !isActive ? 1.2 : 1.0,
                    transition: { duration: 0.5 },
                }}

                className={classNames(
                    'flex justify-center items-center  hover:bg-gray-900 py-4 hover:rounded-[5px] w-[158px] h-[48px]',
                    {
                        'text-white-500 scale-200': isActive,
                        'text-slate-500 hover:text-orange-100': !isActive,
                    }
                )}
            >
                {text}

            </motion.div>
        </Link>
    );
};
