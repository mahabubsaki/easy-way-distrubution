import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { categories } from '@/utils/constants';
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import styles from '@/styles/CategoriesSlider.module.css';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import axios from 'axios';
import cheerio from 'cheerio';
import { useRouter } from 'next/router';
SwiperCore.use([Navigation, Autoplay]);


interface Product {
    img: string;
    quantity: number;
    name: string;
}

const CategoriesSlider = () => {
    const router = useRouter();
    const [isLastSlide, setIsLastSlide] = useState(false);
    const [c, setC] = useState<Product[]>([]);
    const swiperRef = useRef<SwiperCore>();
    const swiperWrapperDiv = useRef<HTMLDivElement>(null);
    const isCategoryInView = useInView(swiperWrapperDiv, { once: true, amount: 0 });
    const startSwipper = (e: MouseEvent) => swiperRef.current && swiperRef.current.autoplay.start();
    const stopSwipper = (e: MouseEvent) => swiperRef.current && swiperRef.current.autoplay.stop();
    useEffect(() => {
        if (!isCategoryInView) return;
        let timeId: NodeJS.Timeout;
        const targetDiv = swiperWrapperDiv.current;
        if (swiperRef.current) {
            swiperRef.current.autoplay.stop();
            timeId = setTimeout(() => {
                swiperRef.current?.autoplay.start();
                targetDiv?.addEventListener('mouseleave', startSwipper);
                targetDiv?.addEventListener('mouseenter', stopSwipper);
            }, (categories.length * 1000));
        }
        return () => {
            clearTimeout(timeId);
            targetDiv?.removeEventListener('mouseleave', startSwipper);
            targetDiv?.removeEventListener('mouseleave', stopSwipper);
        };
    }, [isCategoryInView]);
    useEffect(() => {
        const myFetch = async () => {
            const { data } = await axios.get('/data.json');
            const { data: categoriesi } = await axios.get('/category.json');
            const categories = [... new Set(data.map((i: any) => i.category).filter((i: any) => !!i))];
            categories.sort(function (a, b) {
                if (a < b) { return -1; }
                if (a > b) { return 1; }
                return 0;
            });
            categoriesi.sort(function (a, b) {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            });



            const arr: any[] = [];
            categories.forEach((i, index) => {
                const qty = data.filter((item: any) => item.category === i);
                const obj = { img: categoriesi[index].img, quantity: qty.length, name: i };
                arr.push(obj);

            });
            console.log(arr);
            setC(arr as never[]);
        };
        myFetch();
    }, []);
    return (
        <div className='pb-[40px]'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='mb-[45px]'>
                    <p className="flex items-center mx-0 xl:-mx-[20px]">
                        <span className="border-t block border-[#0000001a] flex-grow mr-[15px]"></span>
                        <span className={`font-bold text-[16px] md:text-[18px]`}>BROWSE OUR CATEGORIES</span>
                        <span className="border-t block border-[#0000001a] flex-grow ml-[15px]"></span>
                    </p>
                </div>
                <div ref={swiperWrapperDiv}>
                    <Swiper onSlideChange={(swiper) => {
                        if (swiper.realIndex === categories.length - 1) setIsLastSlide(true);
                        if (swiper.realIndex === 0) setIsLastSlide(false);
                    }} modules={[Navigation]} onInit={(swiper) => swiperRef.current = swiper}
                        autoplay={isCategoryInView ? {
                            delay: 500,
                            reverseDirection: isLastSlide
                        } : undefined} speed={2000} navigation={true} effect={'coverflow'}
                        breakpoints={{
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
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 20
                            }
                        }}>
                        {c.map((item, i) => <SwiperSlide className='mb-[20px]' key={i}>

                            <div onClick={() => router.push(`/category/${item.name}`)} className={`w-full  shadow-none duration-500 hover:shadow-[0_12px_20px_0_rgba(0,0,0,0.08)] ${styles.parent} cursor-pointer ${isCategoryInView && `animate__fadeInUp animate__animated animate__delay-${i}s`}`}>
                                <figure className={`w-full aspect-[1/1] ${styles.fig}`}>
                                    <div className='w-full h-full relative'>
                                        <img src={item.img} alt="categoty-image" className='object-cover w-full h-full absolute inset-0' />
                                    </div>
                                </figure>
                                <div className='p-[20px] text-center flex flex-col items-center text-[#1D2127]'>
                                    <p className='uppercase text-[13.5px] md:text-[15px] font-bold mb-[10px]'>{item.name}</p>
                                    <span className='text-[10px] opacity-70 uppercase'>{item.quantity} Products</span>
                                </div>
                            </div>

                        </SwiperSlide>)}
                    </Swiper>

                </div>
            </div>
        </div>
    );
};

export default CategoriesSlider;