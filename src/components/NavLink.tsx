'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { motion } from "framer-motion";


type NavLinkProps = {

    href: string;
    label: string;
};

export const Button: React.FC<{ text: string, href: string }> = ({ text, href }) => {
    return (
        <motion.button
            whileTap={{ scale: 1.3 }}
            className="flex justify-center items-center hover:bg-violet-950 py-4 rounded-[80px] w-[158px] h-[48px]"
        >
            <NavLink href={href} label={text} />
        </motion.button>
    );
};

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href}>
            <span
                className={classNames(
                    {
                        'text-yellow-400': isActive,
                        'text-gray-200': !isActive,
                    }
                )}
            >
                {label}
            </span>
        </Link>
    );
};

export default NavLink;
