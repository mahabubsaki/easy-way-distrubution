import React, { useRef, useState, useEffect, CSSProperties } from 'react';
import logo from '@/assets/Blue_and_Purple_Bag_Online_Shop_Logo.png';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure, DrawerContentProps } from '@chakra-ui/react';
import styles from '@/styles/MiddleNav.module.css';
import CartProduct from '../map/CartProduct';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import { Sidenav, Nav } from 'rsuite';
import { FaSearch } from 'react-icons/fa';
import { brands, categories } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

const MiddleNav = () => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const btnRef2 = useRef<HTMLButtonElement>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure();
    const [openSearch, setOpenSearch] = useState(false);
    useEffect(() => {
        const hidePopUp = () => setOpenSearch(false);
        window.addEventListener('click', hidePopUp);
        return () => {
            window.removeEventListener('click', hidePopUp);
        };
    }, []);
    const [isFixed, setIsFixed] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const [x, setX] = useState(0);
    useEffect(() => {
        if (navRef.current) {
            setX(navRef.current.getBoundingClientRect().top);
        }
    }, [navRef]);

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                setIsFixed(window.scrollY > x + 150);
            }
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [x]);
    return (
        <>
            <div className={`border-t  border-b lg:border-b-0 duration-500 z-[30] bg-white left-0 right-0 border-[#E7E7E7]  ${isFixed ? `py-[10px] ${styles.myFixed}` : `${styles.mySticky} py-[27px]`}`} ref={navRef}>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='px-[10px] flex  items-center gap-[40px]'>
                        <div className='flex items-center justify-between w-[300px] gap-3 xs:w-[200px] lg:w-[120px] h-[57px]'>
                            <div className='w-[15%] lg:hidden block'>
                                <button onClick={onOpen1}>
                                    <GiHamburgerMenu className='text-[#0088CC] font-bold text-2xl' />
                                </button>
                            </div>

                            <Image src={logo} alt="site-logo" className='w-[85%] lg:w-full h-full' />
                        </div>
                        <div className='w-full flex gap-[30px] text-[13px] justify-end lg:justify-start  text-[#8d8d8d]'>
                            <div className='w-full h-[40px] hidden lg:flex items-center rounded-[50px] bg-[#f1f1f1]'>
                                <input placeholder='Search...' type="text" className='h-full w-[70%] outline-none px-[20px] py-[10px]  bg-transparent rounded-tl-[50px] rounded-bl-[50px]' />
                                <div className='font-normal flex items-center w-[23%] px-[14px] border-l border-r h-[40px] border-white'>
                                    <select name="" id="" className={`bg-transparent w-full cursor-pointer outline-none ${styles.select}`}>
                                        <option value="">All Categories</option>
                                        <option value="4">Fashion</option>
                                        <option value="12">- Women</option>
                                        <option value="13">- Men</option>
                                        <option value="66">- Jewellery</option>
                                        <option value="67">- Kids Fashion</option>
                                        <option value="5">Electronics</option>
                                        <option value="21">- Smart TVs</option>
                                        <option value="22">- Cameras</option>
                                        <option value="63">- Games</option>
                                        <option value="7">Home &amp; Garden</option>
                                        <option value="11">Motors</option>
                                        <option value="31">- Cars and Trucks</option>
                                        <option value="32">- Motorcycles &amp; Powersports</option>
                                        <option value="33">- Parts &amp; Accessories</option>
                                        <option value="34">- Boats</option>
                                        <option value="57">- Auto Tools &amp; Supplies</option>
                                    </select>
                                </div>
                                <div className='w-[7%] h-[40px] flex justify-center items-center'>
                                    <BsSearch className='text-[#222529] text-lg cursor-pointer' />
                                </div>
                            </div>
                            <div className='hidden lg:flex items-center'>
                                <FiPhoneCall className='text-[30px] mr-[7px]' />
                                <div className='flex flex-col'>
                                    <span className='text-[11px] text-[#777] font-semibold'>CALL IS NOW</span>

                                    <span className='text-[16px] font-bold flex gap-1'><span>+130</span><span>5697</span>1810</span>
                                </div>
                            </div>
                            <div className='flex gap-3 sm:gap-5 text-2xl items-center'>
                                <div className='relative block lg:hidden'>
                                    {openSearch ? <MdOutlineClose onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenSearch(false);

                                    }} className='text-[#222529] relative right-6 xs:right-0 hover:text-[#08c] duration-500  cursor-pointer' /> : <BsSearch onClick={(e) => {

                                        e.stopPropagation();
                                        setOpenSearch(true);
                                    }} className='text-[#222529] relative right-6 xs:right-0 hover:text-[#08c] duration-500  cursor-pointer' />}
                                    <div onClick={(e) => e.stopPropagation()} className={`w-[320px] xs:w-[360px]  xs:-left-[305px] -left-[289px] duration-500   text-[13px]  flex ${openSearch ? ' top-[45px] opacity-100  z-20' : 'opacity-0 top-[0px] -z-50'} absolute items-center h-[50px] rounded-[50px] bg-[#f1f1f1] border-[5px] border-[#08C]`}>
                                        <span className={`${styles['custom-arrow']} duration-500 right-[23px]`}></span>
                                        <input placeholder='Search...' type="text" className='h-full w-[45%] outline-none px-[20px] py-[10px]  bg-transparent rounded-tl-[50px] rounded-bl-[50px]' />
                                        <div className='font-normal flex items-center w-[43%] px-[14px] border-l border-r h-[40px] border-white'>
                                            <select name="" id="" className={`bg-transparent w-full cursor-pointer outline-none ${styles.select}`}>
                                                <option value="">All Categories</option>
                                                <option value="4">Fashion</option>
                                                <option value="12">- Women</option>
                                                <option value="13">- Men</option>
                                                <option value="66">- Jewellery</option>
                                                <option value="67">- Kids Fashion</option>
                                                <option value="5">Electronics</option>
                                                <option value="21">- Smart TVs</option>
                                                <option value="22">- Cameras</option>
                                                <option value="63">- Games</option>
                                                <option value="7">Home &amp; Garden</option>
                                                <option value="11">Motors</option>
                                                <option value="31">- Cars and Trucks</option>
                                                <option value="32">- Motorcycles &amp; Powersports</option>
                                                <option value="33">- Parts &amp; Accessories</option>
                                                <option value="34">- Boats</option>
                                                <option value="57">- Auto Tools &amp; Supplies</option>
                                            </select>
                                        </div>
                                        <div className='w-[12%] h-[40px] flex justify-center items-center'>
                                            <BsSearch className='text-[#222529] text-lg cursor-pointer' />
                                        </div>
                                    </div>

                                </div>
                                <AiOutlineUser className='text-[#222529] hidden xs:block' />
                                <FiHeart className='text-[#222529] hidden xs:block' />
                                <button className='relative hidden xs:block' onClick={onOpen} ref={btnRef} >
                                    <AiOutlineShopping className='text-[#222529]' />
                                    <span className='absolute h-4 w-4 rounded-full bg-[#FF5B5B] z-1 text-white flex justify-center items-center text-[11px] -right-[7px] top-0'>0</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent className='py-[25px] px-[20px] overflow-y-auto' style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <p className='mb-[17px] leading-10 font-bold text-[#212529] text-[20px]'>Shopping Cart</p>
                    <DrawerCloseButton size={'lg'} className='text-black' />
                    {new Array(5).fill(0).map((item, i) => <CartProduct key={i} />)}
                    <div className='my-[15px] flex items-center justify-between text-[#212529] font-bold text-[13px]'>
                        <span>SUBTOTAL:</span>
                        <span className='text-[15px]'>$134.00</span>
                    </div>
                    <div className='mt-[10px] flex flex-col gap-[15px]'>
                        <button className='bg-[#e7e7e7] hover:bg-[#f1f1f1] duration-500 text-[12px] font-semibold py-[14px] leading-[16px] tracking-wide rounded-sm px-[25px]'><Link className='hover:no-underline hover:text-[#222529]' href={'/cart'}>VIEW CART</Link></button>
                        <button className='bg-[#222529] hover:bg-[#34393F] text-white duration-500 text-[12px] font-semibold py-[14px] leading-[16px] tracking-wide rounded-sm px-[25px]'><Link className='hover:no-underline hover:text-white' href={'/checkout'}>CHECKOUT</Link></button>
                    </div>
                </DrawerContent>
            </Drawer >
            <Drawer
                isOpen={isOpen1}
                placement='left'
                onClose={onClose1}
                finalFocusRef={btnRef2}
                size='xs'
            >
                <DrawerOverlay />
                <DrawerContent css={{ fontFamily: "'Poppins', sans-serif", overflow: 'auto', backgroundColor: 'black', color: 'white' }}>
                    <DrawerCloseButton size={'lg'} className='text-white font-bold' />
                    <div className='mt-[47px] mb-[30px]'>
                        <div style={{ width: '100%', marginBottom: '20px' }} className='overflow-auto'>

                            <Sidenav appearance='subtle' expanded={true}  >
                                <Sidenav.Body>
                                    <Nav>
                                        <Nav.Item eventKey="1" className='border-b border-[#242527]'>
                                            <span className=' relative left-[-35px]'>HOME</span>
                                        </Nav.Item>
                                        <Nav.Menu className='relative left-[-35px] border-b border-[#242527] ' placement="rightStart" eventKey="2" title="CATEGORIES" >
                                            {categories.map((item, i) => <Nav.Item key={i} eventKey={`2-${i + 1}`} className='border-b border-[#242527]'>{item.name}</Nav.Item>)}
                                        </Nav.Menu>
                                        <Nav.Menu className='relative left-[-35px] border-b border-[#242527]' placement="rightStart" eventKey="3" title="BRANDS" >
                                            {brands.map((item, i) => <Nav.Item key={item} eventKey={`3-${i + 1}`} className='border-b border-[#242527]'>{item}</Nav.Item>)}
                                        </Nav.Menu>
                                        <Nav.Item eventKey="4" className='border-b border-[#242527]'>
                                            <span className=' relative left-[-35px]'>SPECIAL OFFERS!</span>
                                        </Nav.Item>
                                        <Nav.Item eventKey="6" className='border-b border-[#242527]'>
                                            <span className=' relative left-[-35px]'>MY ACCOUNT</span>
                                        </Nav.Item>
                                        <Nav.Item eventKey="7" className='border-b border-[#242527]'>
                                            <span className=' relative left-[-35px]'>MY WISHLIST</span>
                                        </Nav.Item>
                                        <Nav.Item eventKey="8" className='border-b border-[#242527]'>
                                            <span className=' relative left-[-35px]'>CART</span>
                                        </Nav.Item>
                                        <Nav.Item eventKey="9" className='border-b border-[#242527]'>
                                            <span className=' relative left-[-35px]'>ABOUT US</span>
                                        </Nav.Item>
                                        <Nav.Item eventKey="10" className='border-b border-[#242527]'>
                                            <span className=' relative left-[-35px]'>CONTACT US</span>
                                        </Nav.Item>
                                        <Nav.Item eventKey="11" className='border-b border-[#242527]'>
                                            <span className=' relative left-[-35px]'>LOG IN</span>
                                        </Nav.Item>
                                    </Nav>
                                </Sidenav.Body>
                            </Sidenav>
                        </div>
                        <div className='px-[15px] mb-[20px] relative'>
                            <input type="text" placeholder='Search...' className='w-full py-2 px-3 bg-[#282E36] text-[#777777]' />
                            <FaSearch className='absolute right-[23px] z-20 cursor-pointer top-[9px] font-bold text-lg' />
                        </div>
                        <div className='flex justify-center gap-[10px]'>
                            <div className='w-[32px] h-[32px] flex justify-center items-center hover:opacity-50 opacity-100 bg-[#3b5a9a] cursor-pointer duration-500'>
                                <FaFacebookF />
                            </div>
                            <div className='w-[32px] h-[32px] flex justify-center items-center hover:opacity-50 opacity-100 bg-[#1aa9e1] cursor-pointer duration-500'>
                                <FaTwitter />
                            </div>
                            <div className='w-[32px] h-[32px] flex justify-center items-center hover:opacity-50 opacity-100 bg-[#7c4a3a] cursor-pointer duration-500'>
                                <FaInstagram />
                            </div>
                        </div>
                    </div>

                </DrawerContent>
            </Drawer>
        </>
    );
};

export default MiddleNav;