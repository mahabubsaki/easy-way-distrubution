import Link from 'next/link';
import React from 'react';

const CustomUnstyledLink = ({ children, to }: { children: React.ReactNode; to: string; }) => {
    return (
        <Link href={to} className='hover:no-underline hover:text-transparent'>
            {children}
        </Link>
    );
};

export default CustomUnstyledLink;