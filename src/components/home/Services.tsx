import React from 'react';
import { FiCreditCard } from 'react-icons/fi';
import { SlActionUndo, SlEarphonesAlt } from 'react-icons/sl';

const Services = () => {
    return (
        <div className='pt-[50px] bg-[#F6F7F9]'>
            <div className='max-w-[1200px]  mx-auto px-[10px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='px-0 sm:px-[30px] mb-[40px] md:mb-[45px]'>
                    <div className='flex justify-center mb-4'>
                        <div className='text-5xl text-[#0088CC] border-[2px] rounded-full p-5 border-[#DDDDDD]'>
                            <SlEarphonesAlt />
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='mb-1 text-[#222529] text-[14px] md:text-[16px] font-bold'>CUSTOMER SUPPORT</p>
                        <p className='mb-3 text-[12px] md:text-[14px] text-[#555555]'>You Won&apos;t Be Alone</p>
                        <p className='text-[11px] md:text-[13px] text-[#7B858A]'>We really care about you and your website as much as you do. Purchasing Porto or any other theme from us you get 100% free support.</p>
                    </div>
                </div>
                <div className='px-0 sm:px-[30px] mb-[40px] md:mb-[45px]'>
                    <div className='flex justify-center mb-4'>
                        <div className='text-5xl text-[#0088CC] border-[2px] rounded-full p-5 border-[#DDDDDD]'>
                            <FiCreditCard />
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='mb-1 text-[#222529] text-[14px] md:text-[16px] font-bold'>FULLY CUSTOMIZABLE</p>
                        <p className='mb-3 text-[12px] md:text-[14px] text-[#555555]'>Tons Of Options</p>
                        <p className='text-[11px] md:text-[13px] text-[#7B858A]'>With Porto you can customize the layout, colors and styles within only a few minutes. Start creating an amazing website right now!</p>
                    </div>
                </div>
                <div className='px-0 sm:px-[30px] mb-[40px] md:mb-[45px]'>
                    <div className='flex justify-center mb-4'>
                        <div className='text-5xl text-[#0088CC] border-[2px] rounded-full p-5 border-[#DDDDDD]'>
                            <SlActionUndo />
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='mb-1 text-[#222529] text-[14px] md:text-[16px] font-bold'>POWERFUL ADMIN</p>
                        <p className='mb-3 text-[12px] md:text-[14px] text-[#555555]'>Made To Help You</p>
                        <p className='text-[11px] md:text-[13px] text-[#7B858A]'>Porto has very powerful admin features to help customer to build their own shop in minutes without any special skills in web development.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;