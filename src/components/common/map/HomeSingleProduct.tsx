import CustomUnstyledLink from '@/components/helpers/CustomUnstyledLink';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import { AiFillStar, AiOutlineLink, AiOutlineStar } from 'react-icons/ai';
import { BsCartPlus, BsHeart } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

const HomeSingleProduct = ({ item: { category, discount, img, isHot, name, price, rating }, item, delay, isFeatured, isNewArrival, productName, section }) => {
    const [figImg, setFigImg] = useState(false);
    const label = useMemo(() => Math.floor(Math.random() * 3) + 1, []);
    const orderQty = useMemo(() => Math.floor(Math.random() * 50) + 20, []);
    const quantity = useMemo(() => Math.floor(Math.random() * 200) + 50, []);
    const discounts = useMemo(() => Math.floor(Math.random() * 40) + 10, []);
    const range = item?.priceRange ? item.priceRange.split('-') : [14 - 20];
    const code = item?.itemCode ? item.itemCode.split('#')[1] : 'SA202';
    return (
        <div className={`${((section === 'new' && isNewArrival) || (section === 'featured' && isFeatured)) && `animate__fadeInLeft animate__animated animate__delay-${delay}s`}  w-full shadow-none duration-500 rounded-lg border flex flex-col relative hover:shadow-[0_12px_20px_0_rgba(0,0,0,0.08)]`} onMouseEnter={() => {
            setFigImg(true);
        }} onMouseLeave={() => {
            setFigImg(false);
        }}>
            <div>
                <section className='w-full cursor-pointer aspect-[1/1] relative rounded-lg mb-4'>

                    <div className='w-full h-full relative'>
                        <Image src={item.img} fill alt="product-image-1" className={`w-full object-cover z-[3] h-full rounded-lg relative duration-500`} />
                    </div>



                    <div className='absolute top-2 z-[20] left-2'>
                        {label === 1 ? <p className=' text-[10px] text-white font-semibold leading-[10px] bg-[#2ba968] rounded-[12px] mb-1 py-[5px] px-[12px]'>HOT</p> : null}
                        {label === 2 ? <p className=' text-[10px] text-white font-semibold leading-[10px] bg-[#da5555] rounded-[12px] mb-1 py-[5px] px-[12px]'>-{discounts}%</p> : null}
                    </div>
                    <div className='absolute top-2 right-2 z-[20] text-2xl block xs:hidden'>
                        <BsHeart />
                    </div>
                </section>
                <div className='px-2 flex flex-col items-center text-center'>
                    <p className='uppercase text-sm duration-500 cursor-pointer text-[#777]'>CATEGORY : {category}</p>
                    <p className='uppercase text-sm duration-500 cursor-pointer text-[#777]'>BRAND : {item.brand}</p>
                    <p title='item code' className=' text-[10px] text-white font-semibold leading-[10px] bg-[#08c] rounded-[12px] mb-1 py-[5px] px-[12px]'>{code}</p>
                    <p title={productName} className='hover:text-[#08c] duration-500 cursor-pointer text-lg text-[#222529]'>{item.productName?.length > 100 ? item.productName.slice(0, 50) + '...' : item.productName}</p>
                    <p className='text-base font-bold text-[#777]'>Available Quantity : {quantity}</p>
                    <p className='text-base font-bold text-[#777]'>Total Order : {orderQty}</p>
                    <p className='text-base font-bold text-[#777]'>Price Range : ${range[0]} - ${range[1]}</p>
                    <p className='text-sm text-black text-opacity-70'>Description : {item.description?.length > 100 ? item.description.slice(0, 100) + '...' : item.description}</p>


                </div>
            </div>
            <div className='w-full h-[70px]'>

            </div>
            {/* <div className='mb-4 items-stretch absolute bottom-0 left-0 right-0 justify-center flex'>
                <a href={item.productURL} className='no-underline hover:no-underline' target='_blank'>
                    <button className={`${!figImg ? ' w-auto truncate duration-500 text-[#6F6E6B]' : ''} border hover:bg-[#2B2B2D] hover:z-[2] hover:text-white duration-500 border-[#f4f4f4] leading-[34px]  bg-[#F4F4F4] px-[12px] flex items-center md:px-[14px] text-[10.5px] md:text-[12px] font-semibold cursor-pointer gap-[2px]`}>
                        <AiOutlineLink className='text-xl' />
                        <span>Product URL</span>
                    </button>
                </a>

            </div> */}
        </div>
    );
};

export default HomeSingleProduct;