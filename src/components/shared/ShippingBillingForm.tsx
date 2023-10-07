import React from 'react';
import { FormControl, FormLabel, Input, Select, Textarea } from '@chakra-ui/react';


const ShippingBillingForm = ({ data, children, notes }: {
    data: {
        states: {
            abbreviation: string;
            name: string;
        }[];
    },
    children?: React.ReactNode;
    notes: boolean;
}) => {
    return (
        <>
            <p className='text-[22px] font-bold text-[#222529]'>Shipping & Billing details</p>
            <form autoComplete='new-password' onSubmit={(e) => e.preventDefault()} className='py-[10px] flex flex-col gap-[18px]'>
                <div className='flex gap-[20px] flex-col sm:flex-row'>
                    <FormControl isRequired>
                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>First name</span></FormLabel>
                        <Input autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>Last name</span></FormLabel>
                        <Input autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>Company name (optional)</span></FormLabel>
                        <Input autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                    </FormControl>
                </div>
                <div>
                    <FormControl isRequired>
                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>State</span></FormLabel>
                        <Select focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'}>
                            {data.states.map((item) => <option key={item.abbreviation} className='text-[#777]' value={item.abbreviation}>{item.name} ({item.abbreviation})</option>)}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl isRequired>
                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>Town / City</span></FormLabel>
                        <Input autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                    </FormControl>
                </div>
                <div>
                    <FormControl isRequired>
                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>Postcode / ZIP</span></FormLabel>
                        <Input autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                    </FormControl>
                </div>
                <div>
                    <FormControl isRequired>
                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>Phone</span></FormLabel>
                        <Input autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                    </FormControl>
                </div>
                <div>
                    <FormControl isRequired>
                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>Email</span></FormLabel>
                        <Input autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                    </FormControl>
                </div>
                {notes ? <div>
                    <FormControl>
                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>Order notes (optional)</span></FormLabel>
                        <Textarea resize={'none'} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} py={'3'} height={'2xs'} color={'option.400'} />
                    </FormControl>
                </div> : null}
            </form>


            {children}

        </>
    );
};

export default ShippingBillingForm;