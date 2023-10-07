import React from 'react';
import Marquee from 'react-fast-marquee';
import { tempBrands } from '@/utils/constants';
import Image from 'next/image';

const BrandsMarquee = () => {
    return (
        <div>
            <div className='max-w-[1200px] mx-auto'>
                <div className='px-[10px] mb-[20px]'>
                    <p className="flex items-center mx-0 xl:-mx-[20px]">
                        <span className="border-t block border-[#0000001a] flex-grow mr-[15px]"></span>
                        <span className={`font-bold text-[16px] md:text-[18px]`}>BRANDS</span>
                        <span className="border-t block border-[#0000001a] flex-grow ml-[15px]"></span>
                    </p>
                </div>
                <hr className='mb-[44px] md:mb-[48px]' />
                <div>
                    <Marquee speed={70}>
                        {tempBrands.map((item, i) => <div key={i} className='w-[200px] h-[56px] flex justify-center items-center'>
                            <div className='w-[130px] h-full relative'>
                                <Image src={item} alt="brands-image" fill />

                            </div>


                        </div>)}
                    </Marquee>
                </div>
                <hr className='mt-[36px] md:mt-[40px] mb-[44px] md:mb-[48px]' />
            </div>

        </div>
    );
};

export default BrandsMarquee;