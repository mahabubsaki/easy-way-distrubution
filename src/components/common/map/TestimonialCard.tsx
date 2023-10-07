import React from 'react';
import owner from '@/assets/client2.png';

const TestimonialCard = () => {
    return (
        <div>
            <div className='flex gap-[25px]'>
                <figure>
                    <img src={owner.src} height={40} width={40} alt="" />
                </figure>
                <div>
                    <div>
                        <strong className='text-[#2b2b2d] text-base mb-1'>Bob Smith</strong>
                        <p className='text-[#777] text-[12px] font-semibold'>SMARTWAVE CEO</p>
                    </div>
                </div>
            </div>
            <blockquote className='w-[85%] py-5 pl-5 pr-8 ml-auto relative'>
                <p className='text-[14px] text-[#62615e]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit accusamus, consectetur fugit blanditiis rem, adipisci vero pariatur nihil fugiat neque excepturi illo enim ea. Molestiae maxime dignissimos ad architecto repellendus dolores tempora facere in tempore commodi aspernatur voluptatibus, aut necessitatibus?</p>
                <p className='text-[#08c] text-[50px] font-black absolute -left-4 -top-4'>&ldquo;</p>
            </blockquote>
        </div>
    );
};

export default TestimonialCard;