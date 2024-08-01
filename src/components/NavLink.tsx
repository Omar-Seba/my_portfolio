'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';


type NavLinkProps = {

    href: string;
    label: string;
};

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href}>
            <span
                className={classNames(
                    {
                        'text-blue-500': isActive,
                        'text-gray-500': !isActive,
                    }
                )}
            >
                {label}
            </span>
        </Link>
    );
};

export default NavLink;
