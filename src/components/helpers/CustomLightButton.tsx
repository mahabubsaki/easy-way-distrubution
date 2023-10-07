import React from 'react';

const CustomLightButton = ({ children }: { children: React.ReactNode; }) => {
    return (
        <button className='bg-[#F4F4F4] hover:bg-[#08C] text-inherit hover:text-white duration-500 px-[25px] leading-10 text-[13px] font-bold'>{children}</button>
    );
};

export default CustomLightButton;