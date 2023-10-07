import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import { Ri24HoursFill, RiMoneyDollarCircleLine } from 'react-icons/ri';
import f1 from '@/assets/feature-1.jpg';
import f2 from '@/assets/feature-2.jpg';
import f3 from '@/assets/feature-3.jpg';
import Image from 'next/image';
const SliderFeature = () => {
    const breakpoints = {
        1: {
            slidesPerView: 1,

        },
        600: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,

        },
    };

    return (
        <div className='mb-[20px]'>
            <div className='max-w-[1200px] mx-auto px-[10px] bg-white'>
                <Swiper modules={[Autoplay]} autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                    loop={true} breakpoints={breakpoints} className='h-[70px] mb-[20px]'>
                    <SwiperSlide >
                        <div className='border-r-0 sm:border-r border-[#E7E7E7] h-full py-4 flex justify-center items-center cursor-pointer'>
                            <div className='flex items-center gap-[15px]'>
                                <FaShippingFast className='text-4xl mx-[3px]' />
                                <div className='mx-[1px]'>
                                    <p className='text-[#222529] text-[14px] leading-[0.7] font-bold'>FREE SHIPPING & RETURN</p>
                                    <p className='text-[13px] text-[#777777]'>Free shipping on all orders over $99.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border-r-0 sm:border-r border-[#E7E7E7] h-full py-4 flex justify-center items-center cursor-pointer'>
                            <div className='flex items-center gap-[15px]'>
                                <RiMoneyDollarCircleLine className='text-4xl mx-[3px]' />
                                <div className='mx-[1px]'>
                                    <p className='text-[#222529] text-[14px] leading-[0.7] font-bold'>MONEY BACK GUARANTEE</p>
                                    <p className='text-[13px] text-[#777777]'>100% money back gurantee.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' h-full py-4 flex justify-center items-center cursor-pointer'>
                            <div className='flex items-center gap-[15px]'>
                                < Ri24HoursFill className='text-4xl mx-[3px]' />
                                <div className='mx-[1px]'>
                                    <p className='text-[#222529] text-[14px] leading-[0.7] font-bold'>ONLINE SUPPORT 24/7.</p>
                                    <p className='text-[13px] text-[#777777]'>You will get best service from us.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <Swiper modules={[Autoplay]} breakpoints={{
                    1: {
                        slidesPerView: 1,

                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },

                }} autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                    loop={true} className='h-[175px]'>
                    <SwiperSlide className=' relative'>
                        <div className='absolute flex flex-col justify-center left-[6.5%] right-[6.5%] items-start inset-0 z-20 cursor-pointer'>
                            <p className='text-[#222529] text-[24px] font-bold '>
                                SH Watches
                            </p>
                            <p>
                                <sup className=' text-[#222529] font-bold text-[20px]'><del>20%</del></sup>
                                <span className=' text-[#08c] font-extrabold text-[29px] relative -top-[2px]'>30%</span>
                                <sup className=' text-[#08c] font-extrabold text-[20px]'>OFF</sup>
                            </p>
                            <button className=' hover:bg-[#34393f] border border-[#222529] text-[11px] py-[6px] px-[11px] bg-[#222529] text-white font-bold'>SHOP NOW</button>
                        </div>
                        <div className='h-full w-full relative'>
                            <Image src={f1} alt="feature-1" fill className='h-full w-full object-cover' />

                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='border-[16px] relative border-[#08c]'>
                        <div className='absolute flex flex-col justify-center left-[6.5%] right-[6.5%] items-center inset-0 z-20 cursor-pointer'>
                            <p className='text-[#222529] text-[24px] font-bold '>
                                DEAL PROMOS
                            </p>
                            <p className='text-[#777] font-semibold text-[15px] relative -top-[8px]'>
                                Starting at $99
                            </p>
                            <button className=' hover:bg-[#34393f] border border-[#222529] text-[11px] py-[6px] px-[11px] bg-[#222529] text-white font-bold'>SHOP NOW</button>
                        </div>
                        <div className='h-full w-full relative'>
                            <Image src={f2} alt="feature-2" fill className='h-full w-full object-cover' />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className=' relative'>
                        <div className='absolute flex flex-col justify-center left-[6.5%] right-[6.5%] items-end inset-0 z-20 cursor-pointer'>
                            <p className='text-[#222529] text-[24px] font-bold '>
                                SH Handbags
                            </p>
                            <p className='text-[#FF7272] font-semibold text-[15px] relative -top-[8px]'>
                                Starting at $99
                            </p>
                            <button className=' hover:bg-[#34393f] border border-[#222529] text-[11px] py-[6px] px-[11px] bg-[#222529] text-white font-bold'>SHOP NOW</button>
                        </div>

                        <Image src={f3} alt="feature-3" className='h-full w-full object-cover' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>




    );
};

export default SliderFeature;
