import React from 'react';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import banner from '@/assets/promo-banner.jpg';


const ParallexPromo = () => {
    return (
        <div>
            <ParallaxProvider>
                <ParallaxBanner
                    layers={[
                        { image: banner.src, speed: -20 },
                        { image: banner.src, speed: -10 },
                    ]}
                    className={`aspect-[8/1] min-h-[380px] md:min-h-[250px] relative`}
                >
                    <div className="absolute inset-0 py-[55px] md:py-[60px] h-full text-white">
                        <p></p>
                        <div className='mx-auto max-w-[768px] my-auto items-center h-full gap-3 md:gap-5 grid grid-cols-1 md:grid-cols-3'>
                            <p className='text-4xl font-bold text-center w-[50%] md:w-full mx-auto  md:text-right '>TOP FASHION DEALS</p>
                            <div className='flex justify-center items-center'>
                                <button className='bg-[#0E0F11] border border-[#0E0F11] py-[14px] px-10 font-bold text-[14px] duration-500 hover:bg-[#34393F] hover:border-[#34393F]'>VIEW SALE</button>
                            </div>
                            <div className='flex flex-col justify-end items-center gap-[5px]'>
                                <b className='text-[#0E0F11] font-bold px-[8px] w-fit py-[5px] rotate-[-2deg] bg-white inline-block text-[18px]'>Exclusive COUPON</b>
                                <div className='flex relative'>
                                    <p className=' rotate-[-90deg] opacity-60 text-[10px] absolute left-[-24px] top-[30px] font-bold'>UP TO</p>
                                    <p className='w-fit rotate-[-2deg] text-[16px] font-bold'><span className='bg-[#FF7272] text-[25.5px] font-bold inline-block py-[5px] px-[8px] mr-[6px]'>$100</span><span>OFF</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ParallaxBanner>
            </ParallaxProvider>
        </div>
    );
};

export default ParallexPromo;