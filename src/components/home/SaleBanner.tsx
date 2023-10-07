import React from 'react';
import styles from '@/styles/SaleBanner.module.css';

const SaleBanner = () => {
    return (
        <div className='mt-[21px] mb-[44px] animate__animated animate__fadeInUp'>
            <div className={`max-w-[1200px] flex flex-col items-center sm:flex-row mx-[20px] xl:mx-auto ${styles['banner-container']} py-[18px]`}>
                <div className='pl-[10px]  text-white text-[16px] sm:text-[18px] lg:-[20px] font-bold leading-6 pr-[10px] mb-4 md:mb-0 flex-[0_0_75%] flex-wrap flex items-center'>
                    <p className='px-[15px] block text-center sm:text-left'>
                        <span className={`inline-block py-2 mr-[10px] mb-[9px] md:mb-[0px] px-3 text-[16px] sm:text-[18px] lg:-[20px] font-bold text-white z-[2] relative ${styles['big-sale']}`}>BIG SALE</span>
                        ALL NEW FASHION BRANDS ITEMS UP TO 70% OFF
                        <span className='text-[10px] text-white align-middle ml-[10px] md:text-[13px] opacity-70 font-normal'>Online Purchases Only</span>
                    </p>
                </div>
                <div className='flex-[0_0_25%] text-center sm:text-right min-w-[25%] px-[10px]'>
                    <span className='mr-[0] sm:mr-[16px] md:mr-[32px] inline-block py-[15px] hover:bg-[#E2E6EA] px-[38px] duration-500 cursor-pointer bg-white text-[#212529] text-[12.5px] text-center md:text-[14px] font-bold'>VIEW SALE</span>
                </div>
            </div>
        </div>
    );
};

export default SaleBanner;