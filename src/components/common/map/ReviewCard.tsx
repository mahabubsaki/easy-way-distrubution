import CustomDarkButton from '@/components/helpers/CustomDarkButton';
import CustomLightButton from '@/components/helpers/CustomLightButton';
import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ReviewCard = ({ date, img, onOpen, id, productName, rating, review, setCurrentModalItem, currentModalItem, onOpen1, setDeleteId }: {
    img: string, productName: string, rating: number, id: number, review: string, date: string, onOpen: () => void, setCurrentModalItem: React.Dispatch<React.SetStateAction<{
        img: string;
        productName: string;
        rating: number;
        review: string;
        date: string;
        id: number;
    } | null>>, currentModalItem: {
        img: string;
        productName: string;
        rating: number;
        review: string;
        date: string;
        id: number;
    } | null, onOpen1: () => void, setDeleteId: React.Dispatch<React.SetStateAction<number>>;
}) => {
    useEffect(() => {
        if (currentModalItem) {
            onOpen();
        }
    }, [currentModalItem]);

    return (
        <div className='flex'>
            <div className='shadow-lg rounded-lg flex flex-col justify-between'>
                <div className='flex flex-col gap-2 py-2 '>
                    <figure className='aspect-square w-full group rounded-lg relative'>
                        <img src={img} alt="" className='h-full w-full rounded-lg' />
                        <div className='group-hover:opacity-100 absolute group-hover:bottom-3 mx-auto left-1/2 -translate-x-1/2 duration-500  opacity-0 -bottom-2'>
                            <CustomDarkButton>Details</CustomDarkButton>
                        </div>
                    </figure>
                    <p className='text-lg font-semibold capitalize text-[#222529] text-center'>{productName}</p>
                    <div className='flex justify-center'>
                        {new Array(rating).fill(0).map((_, i) => <AiFillStar key={i} className='text-[#6E7F80]' />)}
                        {new Array(5 - rating).fill(0).map((_, i) => <AiOutlineStar key={i} className='text-[#00000029]' />)}
                    </div>

                    <blockquote className='bg-gray-100  break-all border-l-4 max-h-[180px] overflow-y-auto italic border-gray-400 pr-1 my-2 pl-4 py-2'>
                        <div className='text-center font-semibold my-2'>
                            <p>Reviewed On <br />{format(new Date(date), 'PP')}</p>
                        </div>
                        &ldquo;{review}&rdquo;
                    </blockquote>
                </div>

                <div className='inline-block mx-auto my-2' onClick={() => {
                    setCurrentModalItem({ img, date, id, productName, rating, review });
                }}>
                    <CustomLightButton>Edit Review</CustomLightButton>
                </div>
                <div className='inline-block mx-auto mt-2 mb-4' onClick={() => {
                    setDeleteId(id);
                    onOpen1();
                }}>
                    <CustomDarkButton>Delete Review</CustomDarkButton>
                </div>

            </div>
        </div>
    );
};

export default ReviewCard;