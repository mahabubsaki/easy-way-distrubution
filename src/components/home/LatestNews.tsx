import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import { blogs } from '@/utils/constants';
import Image from 'next/image';

const LatestNews = () => {
    const breakpoints = {
        1: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    };

    return (
        <div className='pt-[46px] px-[10px]'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='px-[10px] mb-[20px]'>
                    <p className="flex items-center mx-0 xl:-mx-[20px]">
                        <span className="border-t block border-[#0000001a] flex-grow mr-[15px]"></span>
                        <span className={`font-bold text-[16px] md:text-[18px]`}>LATEST NEWS</span>
                        <span className="border-t block border-[#0000001a] flex-grow ml-[15px]"></span>
                    </p>
                </div>
                <div>
                    <Swiper modules={[Autoplay]} autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                        loop={true} breakpoints={breakpoints}>
                        {blogs.map((item, i) => <SwiperSlide className='mb-[20px]' key={i}>
                            <article className='w-full shadow-none duration-500 hover:shadow-[0_12px_20px_0_rgba(0,0,0,0.08)]'>
                                <figure className='w-full aspect-square relative mb-[17px]'>
                                    <Image src={item.img} fill alt="news-cover" className='absolute inset-0 h-full w-full object-cover' />
                                    <div className='absolute z-[2] top-4 left-4 bg-[#222529] text-white uppercase flex flex-col justify-center items-center p-2'>
                                        <span className='text-[18px] leading-[18px] tracking-[0.7px] font-bold'>{item.published[1]}</span>
                                        <span className='text-[11px] leading-[11px]  opacity-60'>{item.published[0]}</span>
                                    </div>
                                </figure>
                                <div className='pb-[21px]  pl-4'>
                                    <p title={item.title} className='text-[16px] md:text-[18px] text-[#222529] no-underline hover:underline w-full truncate decoration-[#222529] duration-500 cursor-pointer font-bold mb-[13px]'>{item.title}</p>
                                    <p className='text-[#777] text-[11.5px] md:text-[13px] mb-[7px]'>{item.text.length > 101 ? item.text.slice(0, 101) + '...' : item.text}</p>
                                    <p className='text-[#999] text-[9px] md:text-[10px]'>{item.comments.length} COMMENTS</p>
                                </div>
                            </article>
                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;