import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';


type handleChangeType = {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
        field: T_1
    ): T_1 extends React.ChangeEvent<any>
        ? void
        : (e: string | React.ChangeEvent<any>) => void;
};
type handleBlurType = {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
};

const CustomInput = ({ inputLabel, placeholder, name, helper, type, handleBlur, handleChange, value, isInvalid }: { inputLabel: string, placeholder: string, name: string, helper: React.ReactNode, type: string, value: string, handleChange: handleChangeType; handleBlur: handleBlurType, isInvalid: boolean; }) => {
    return (
        <div>
            <FormControl isInvalid={isInvalid}>
                <FormLabel cursor={'pointer'}><span className='text-[14px] text-[#777] font-medium'>{inputLabel}</span></FormLabel>
                <Input value={value} onChange={handleChange} onBlur={handleBlur} type={type} _placeholder={{ opacity: '50%' }} name={name} placeholder={placeholder} autoComplete="disable" focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                {helper ? helper : null}
            </FormControl>
        </div>
    );
};

export default CustomInput;