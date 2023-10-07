import React, { useState } from 'react';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import styles from '@/styles/SliderHeader.module.css';
import slide1 from '@/assets/slide-1.jpg';
import slide2 from '@/assets/slide-2.jpg';
import Image from 'next/image';
const SliderHeader = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <header className='h-[500px] mb-[20px]'>
            <Swiper
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                autoplay={{
                    delay: 5000,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className={styles.swiperComponent}
            >
                {new Array(10).fill(0).map((item, index) => <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                        <div className='z-[2] absolute inset-0'>
                            <div className='max-w-[1200px] px-[10px] h-full mx-auto'>

                                {index % 2 === 1 ?
                                    <div className={`w-full ${index === activeIndex && 'animate__animated animate__fadeInUp animate__faster'}  sm:w-1/2 h-full flex items-center`}>
                                        <div>
                                            <p className='mb-4 text-[#222529] text-[12px] sm:text-[15px] md:text-[16.5px] lg:text-[19px] font-medium opacity-70'>Find the Boundaries. Push Through!</p>
                                            <p className={`${styles.saleTitle} text-[35px] sm:text-[text-41px] md:text-[46px] lg:text-[53px]`}>Summer sale</p>
                                            <p className='text-[#222529] mb-[10px] text-[50px] sm:text-[63px] md:text-[74px] lg:text-[94px] font-bold mt-0'>70% OFF</p>
                                            <div className='flex items-center'>
                                                <span className='text-[8px] sm:text-[9.5px] md:text-[11px] lg:text-[12.5px] text-[#222529] font-bold'>Starting At</span>
                                                <b className='bg-[#FF7272] text-[15px] align-middle font-bold px-[8px] ml-[13px] mr-1 mt-[1px] -rotate-2 text-white'>
                                                    <sup className='text-[9.5px] sm:text-[11.5px] md:text-[13px] lg:text-[14.5px]'>$</sup>
                                                    <em className='text-[19.5px] sm:text-[22.5px] md:text-[25px] lg:text-[29px]'>199</em>
                                                    <sup className='text-[9.5px] sm:text-[11.5px] md:text-[13px] lg:text-[14.5px]'>99</sup>
                                                </b>
                                                <button className='bg-[#222529] hover:bg-[#34393F] text-white duration-500 text-[9.5px] sm:text-[11px] md:text-[12px] lg:text-[14.5px] border border-[#222529] ml-1 font-bold px-[26px] py-[10px] sm:px-[30.5px] sm:py-[12px] md:px-[33px] md:py-[13px] lg:py-[15px] lg:px-[39px] leading-[16px] tracking-wide rounded-sm  '>SHOP NOW!</button>
                                            </div>
                                        </div>
                                    </div>
                                    :

                                    <div className={`w-full  ${index === activeIndex && 'animate__animated animate__fadeInUp animate__faster'} sm:w-1/2 ml-auto mr-1 h-full justify-end flex items-center`}>
                                        <div>
                                            <p className='text-[#999999] text-[22px] sm:text-[29px] md:text-[34px] lg:text-[34px] font-medium opacity-70'>EXTRA</p>
                                            <p className='text-[#222529] text-[46px] sm:text-[60px] md:text-[69px] lg:text-[69px] font-bold m-0 leading-[1]'>20% OFF</p>
                                            <p className='text-[#222529] text-[22px] sm:text-[29px] md:text-[34px] lg:text-[34px] font-bold m-0'>-ACCESSORIES-</p>
                                            <p className={`${styles.saleTitle} mb-6 text-[27px] sm:text-[text-35px] md:text-[40px] lg:text-[40px]`}>Summer sale</p>
                                            <button className='bg-[#222529] hover:bg-[#34393F] text-white duration-500 text-[10.5px] sm:text-[11px] md:text-[14px] lg:text-[16px] border border-[#222529] ml-1 font-bold px-[17px] py-[10px] sm:px-[22px] sm:py-[14x] md:px-[25px] md:py-[16px] lg:py-[16px] lg:px-[35px] leading-[16px] tracking-wide rounded-sm  '>SHOP ALL SALE</button>
                                        </div>
                                    </div>
                                }


                            </div>
                        </div>
                        <Image src={index % 2 === 0 ? slide1 : slide2} alt="slider-banner" className='absolute z-[1] inset-0 object-[55%] object-cover' />
                    </div>
                </SwiperSlide>)}
            </Swiper>

        </header>
    );
};

export default SliderHeader;