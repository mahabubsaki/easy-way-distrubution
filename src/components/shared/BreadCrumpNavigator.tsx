import Link from 'next/link';
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

const BreadCrumpNavigator = ({ paths }: { paths: string[]; }) => {
    return (
        <div className='py-[10px] px-[10px] text-[#777] text-[12px] flex gap-[12px] items-center'>
            <Link className='hover:no-underline focus:no-underline hover:text-[#08c]' href={'/'}>
                <AiOutlineHome className='text-lg hover:text-[#08c] duration-500 cursor-pointer' />
            </Link>
            {paths.map((item, i) => {
                if (i == paths.length) {
                    return <Link className='hover:no-underline focus:no-underline hover:text-[#08c]' href={`/${item.toLowerCase().split(' ')}`}><span key={i} className='uppercase'>{item.split('-').join(' ')}</span></Link>;
                } else {
                    return <React.Fragment key={i}>
                        <IoIosArrowForward className='' />
                        <Link className='hover:no-underline focus:no-underline hover:text-[#08c]' href={`/${paths.slice(0, i + 1).map(each => each.toLowerCase()).join('/')}`}><span className='uppercase'>{item.split('-').join(' ')}</span></Link>
                    </React.Fragment>;
                }
            })}
        </div>
    );
};

export default BreadCrumpNavigator;