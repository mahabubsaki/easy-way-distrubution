import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-[#222529]  xs:mb-0 text-[11.5px] sm:text-[13px] leading-6 text-[#777]'>
            <div className='pt-[65px] pb-[23px] max-w-[1200px] mx-auto'>
                <div className='px-[10px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                    <div className='px-[10px] text-center xs:text-left'>
                        <div className='mb-[30px]'>
                            <p className='text-white text-[18px] font-semibold mb-[17px]'>CONTACT INFO</p>
                            <ul className='mb-[30px] text-[13px]'>
                                <li className='flex flex-col mb-[10px]'>
                                    <span className='text-white'>ADDRESS:</span>
                                    <span className='text-[#777] w-fit mx-auto xs:mx-0 hover:text-[#08c] cursor-pointer duration-500'>218 Nw 7ave hometad Fl 33030</span>
                                </li>
                                <li className='flex flex-col mb-[10px]'>
                                    <span className='text-white'>PHONE:</span>
                                    <span className='text-[#777] w-fit mx-auto xs:mx-0 hover:text-[#08c] cursor-pointer duration-500'>+13056971810</span>
                                </li>
                                <li className='flex flex-col mb-[10px]'>
                                    <span className='text-white'>EMAIL:</span>
                                    <span className='text-[#777] w-fit mx-auto xs:mx-0 hover:text-[#08c] cursor-pointer duration-500'>mail@shophouse.com</span>
                                </li>
                                <li className='flex flex-col mb-[10px]'>
                                    <span className='text-white'>WORKING DAYS/HOURS:</span>
                                    <span className='text-[#777] w-fit mx-auto xs:mx-0 hover:text-[#08c] cursor-pointer duration-500'>Mon - Sun / 9:00 AM - 8:00 PM</span>
                                </li>
                            </ul>
                            <div className='flex justify-center xs:justify-start'>
                                <div className='m-[2px] w-[38px] h-[38px] rounded-full border border-[#313438] text-white flex justify-center items-center hover:bg-[#3b5a9a] duration-500 cursor-pointer'>
                                    <FaFacebookF />
                                </div>
                                <div className='m-[2px] w-[38px] h-[38px] rounded-full border border-[#313438] text-white flex justify-center items-center hover:bg-[#1aa9e1] duration-500 cursor-pointer'>
                                    <FaTwitter />
                                </div>
                                <div className='m-[2px] w-[38px] h-[38px] rounded-full border border-[#313438] text-white flex justify-center items-center hover:bg-[#7c4a3a] duration-500 cursor-pointer'>
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-[10px]'>
                        <div className='mb-[30px]'>
                            <p className='text-white text-[18px] font-semibold mb-[17px] text-center xs:text-left'>CUSTOMER SERVICE</p>
                            <ul className='mb-[22px] flex flex-col items-center xs:items-start'>
                                <li className='text-[#777] w-fit hover:text-[#08c] cursor-pointer duration-500  '>Help & FAQs</li>
                                <li className='text-[#777] w-fit hover:text-[#08c] cursor-pointer duration-500 '>Order Tracking</li>
                                <li className='text-[#777] w-fit hover:text-[#08c] cursor-pointer duration-500 '>Shipping & Delivery</li>
                                <li className='text-[#777] w-fit hover:text-[#08c] cursor-pointer duration-500 '>Orders History</li>
                                <li className='text-[#777] w-fit hover:text-[#08c] cursor-pointer duration-500 '>Advanced Search</li>
                                <li className='text-[#777] w-fit hover:text-[#08c] cursor-pointer duration-500 '>My Account</li>
                                <li className='text-[#777] w-fit hover:text-[#08c] cursor-pointer duration-500 '>Careers</li>
                                <li className='text-[#777] w-fit hover:text-[#08c] cursor-pointer duration-500 '>About Us</li>
                                <li className='text-[#777] w-fit hover:text-[#08c] cursor-pointer duration-500 '>Corporate Sales</li>
                                <li className='text-[#777] w-fit hover:text-[#08c] cursor-pointer duration-500 '>Privacy</li>

                            </ul>
                        </div>
                    </div>
                    <div className='px-[10px]'>
                        <div className='mb-[30px]'>
                            <p className='text-white text-[18px] font-semibold mb-[17px] text-center xs:text-left'>POPULAR TAGS</p>
                            <div className='flex flex-wrap text-[11px] justify-center xs:justify-start'>
                                <span className='inline-block my-1 px-[6.5px] leading-[11px] py-[6px] mr-1 border text-[#a8a8a8] border-[#313438] cursor-pointer hover:text-white hover:border-white duration-500'>Bag</span>
                                <span className='inline-block my-1 px-[6.5px] leading-[11px] py-[6px] mr-1 border text-[#a8a8a8] border-[#313438] cursor-pointer hover:text-white hover:border-white duration-500'>Black</span>
                                <span className='inline-block my-1 px-[6.5px] leading-[11px] py-[6px] mr-1 border text-[#a8a8a8] border-[#313438] cursor-pointer hover:text-white hover:border-white duration-500'>Blue</span>
                                <span className='inline-block my-1 px-[6.5px] leading-[11px] py-[6px] mr-1 border text-[#a8a8a8] border-[#313438] cursor-pointer hover:text-white hover:border-white duration-500'>Clothes</span>
                                <span className='inline-block my-1 px-[6.5px] leading-[11px] py-[6px] mr-1 border text-[#a8a8a8] border-[#313438] cursor-pointer hover:text-white hover:border-white duration-500'>Fashion</span>
                                <span className='inline-block my-1 px-[6.5px] leading-[11px] py-[6px] mr-1 border text-[#a8a8a8] border-[#313438] cursor-pointer hover:text-white hover:border-white duration-500'>Hub</span>
                                <span className='inline-block my-1 px-[6.5px] leading-[11px] py-[6px] mr-1 border text-[#a8a8a8] border-[#313438] cursor-pointer hover:text-white hover:border-white duration-500'>Shirt</span>
                                <span className='inline-block my-1 px-[6.5px] leading-[11px] py-[6px] mr-1 border text-[#a8a8a8] border-[#313438] cursor-pointer hover:text-white hover:border-white duration-500'>Shoes</span>
                                <span className='inline-block my-1 px-[6.5px] leading-[11px] py-[6px] mr-1 border text-[#a8a8a8] border-[#313438] cursor-pointer hover:text-white hover:border-white duration-500'>Skirt</span>
                                <span className='inline-block my-1 px-[6.5px] leading-[11px] py-[6px] mr-1 border text-[#a8a8a8] border-[#313438] cursor-pointer hover:text-white hover:border-white duration-500'>Sports</span>
                                <span className='inline-block my-1 px-[6.5px] leading-[11px] py-[6px] mr-1 border text-[#a8a8a8] border-[#313438] cursor-pointer hover:text-white hover:border-white duration-500'>Sweater</span>
                            </div>
                        </div>
                    </div>
                    <div className='px-[10px]'>
                        <div className='mb-[30px] text-center xs:text-left'>
                            <p className='text-white text-[18px] font-semibold mb-[17px]'>SUBSCRIBE NEWSLETTER</p>
                            <p className='mb-[13px]'>Get all the latest information on events, sales and offers. Sign up for newsletter:</p>
                        </div>
                        <div className='form flex flex-col'>
                            <input type="email" placeholder='Email Address' className='py-2 mb-4 px-6 w-full border bg-[#292C30] rounded-full border-[#292C30] text-[#777]' />
                            <button className='rounded-full text-white text-[13px] bg-[#08c] py-3 px-[27px] border border-[#08c] font-bold w-fit hover:bg-[#00a3f5] duration-500 block mx-auto xs:mx-0'>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </footer>
    );
};

export default Footer;