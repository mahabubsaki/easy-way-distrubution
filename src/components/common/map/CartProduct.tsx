import React from 'react';
import pic from '@/assets/istockphoto-1305489264-612x612.jpg';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';
const CartProduct = ({ name, quantity, price, img }) => {
    return (
        <div className='py-[20px] flex gap-[15px] border-b border-[#E6EBEE]'>
            <div className='w-[70%] mb-[3px] flex flex-col gap-[11px]'>
                <p className='text-[14px] text-[#222529] cursor-pointer font-medium'>{name}</p>
                <p className='text-[#696969] leading-[18px] text-[13px]'>{quantity} x ${price}</p>
            </div>
            <figure className='w-[30%] h-[78px] border relative border-[#f4f4f4]'>

                <img src={img} alt="product-photo" className='w-full h-full' />


                <span className='absolute h-[20px] group w-[20px] rounded-full bg-white shadow-[0_2px_6px_0px_rgb(0,0,0,0.5)] top-[-10px] right-[-10px] flex justify-center items-center cursor-pointer'><MdClose className='group-hover:text-[#0088CC] duration-500' /></span>
            </figure>
        </div>
    );
};

export default CartProduct;