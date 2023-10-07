import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';


const CustomDashboardLink = ({ href, children, className }: {
    href: string;
    children: React.ReactNode;
    className: string;
}) => {
    const router = useRouter();



    return (
        <Link href={href} className={`${className} ${router.pathname === href ? 'text-[#08c]' : 'text-inherit'}`}>
            {children}
        </Link>
    );
};

export default CustomDashboardLink;