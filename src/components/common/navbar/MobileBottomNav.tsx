import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { TiThMenuOutline } from 'react-icons/ti';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { FaAngleUp } from 'react-icons/fa';

const MobileBottomNav = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isFixed2, setIsFixed2] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLSpanElement>(null);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    useEffect(() => {
        if (navRef.current) {
            setX(navRef.current.getBoundingClientRect().top);
        }
        if (arrowRef.current) {
            setY(arrowRef.current.getBoundingClientRect().top);
        }
    }, [navRef, arrowRef]);


    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                setIsFixed(window.scrollY > x - 450);
            }
        };
        const handleScroll2 = () => {

            if (arrowRef.current) {
                setIsFixed2(window.scrollY + 700 > y);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroll2);


        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScroll2);
        };
    }, [x, y]);
    return (
        <>
            <div ref={navRef} className={`fixed duration-500 ${isFixed ? 'bottom-0 opacity-100' : '-bottom-[70px] opacity-0'} left-0 font-semibold items-center text-[9px] right-0 flex xs:hidden z-50 h-[70px] bg-white border-t border-[#E7E7E7]`}>
                <div className='py-[9px] text-[#222529] border-r border-[#E7E7E7] flex items-center justify-center flex-col group gap-1 w-1/5 cursor-pointer'>
                    <AiOutlineHome className='text-3xl group-hover:text-[#08c]' />
                    <span className=' group-hover:text-[#08c]'>HOME</span>
                </div>
                <div className='py-[9px] text-[#222529] border-r border-[#E7E7E7] flex items-center justify-center flex-col group gap-1 w-1/5 cursor-pointer'>
                    <TiThMenuOutline className='text-3xl group-hover:text-[#08c]' />
                    <span className='group-hover:text-[#08c]'>CATEGORIES</span>
                </div>
                <div className='py-[9px] group text-[#222529] border-r border-[#E7E7E7] flex items-center justify-center flex-col gap-1 w-1/5 cursor-pointer'>
                    <FiHeart className='text-3xl group-hover:text-[#08c]' />
                    <span className='group-hover:text-[#08c]'>WISHLIST</span>
                </div>
                <div className='py-[9px] text-[#222529] group border-r border-[#E7E7E7] flex items-center justify-center flex-col gap-1 w-1/5 cursor-pointer'>
                    <AiOutlineUser className='text-3xl group-hover:text-[#08c]' />
                    <span className='group-hover:text-[#08c]'>ACCOUNT</span>
                </div>
                <div className='py-[9px] text-[#222529] group flex items-center justify-center flex-col gap-1 w-1/5 cursor-pointer'>
                    <button className='relative'>
                        <MdOutlineShoppingBag className='text-3xl group-hover:text-[#08c]' />
                        <span className='absolute h-4 w-4 rounded-full bg-[#FF5B5B] z-1 text-white flex justify-center items-center text-[11px] -right-[7px] top-0'>0</span>
                    </button>

                    <span className='group-hover:text-[#08c]'>CART</span>
                </div>
            </div>
            <span onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} ref={arrowRef} className={`fixed duration-500 z-[999] hidden py-[10px] xs:flex items-center justify-center text-3xl font-bold hover:text-[#08c] cursor-pointer text-white w-[50px] bg-[#404040bf] h-[45px] right-[10px] ${isFixed2 ? 'bottom-0 opacity-100' : '-bottom-[70px] opacity-0'}`}><FaAngleUp /></span>
        </>
    );
};

export default MobileBottomNav;