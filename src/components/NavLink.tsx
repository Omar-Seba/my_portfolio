'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { motion } from "framer-motion";


type NavLinkProps = {

    href: string;
    label: string;
    disabled?: boolean;
};

export const NavButton: React.FC<{ text: string; href: string; disable?: boolean }> = ({ text, href, disable }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} passHref aria-disabled={disable} className={disable ? "pointer-events-none " : ""} >
            <motion.div
                whileTap={{ scale: 0.8 }}
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                }}
                className={classNames(
                    'flex justify-center items-center hover:bg-gray-900 py-4 rounded-[2px] w-[158px] h-[48px]',
                    {
                        'text-white-500 scale-100': isActive,
                        'text-gray-500': !isActive,
                    }
                )}
            >
                {text}
            </motion.div>
        </Link>
    );
};
