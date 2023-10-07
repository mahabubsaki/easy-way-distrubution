import { FormControl, FormLabel, Select } from '@chakra-ui/react';
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

const CustomChakraSelect = ({ values, selectLabel, name, value, handleBlur, handleChange, helper, isInvalid }: { values: string[], selectLabel: string, name: string, value: string, handleChange: handleChangeType; handleBlur: handleBlurType, helper: React.ReactNode, isInvalid: boolean; }) => {
    return (
        <div>
            <FormControl isInvalid={isInvalid}>
                <FormLabel><span className='text-[14px] text-[#777] font-medium'>{selectLabel}</span></FormLabel>
                <Select value={value} onChange={handleChange} onBlur={handleBlur} _placeholder={{ opacity: '50%' }} name={name} placeholder='Choose Genders' defaultValue={''} focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'}>
                    {values.map(item => <option key={item}>{item}</option>)}
                </Select>
                {helper}
            </FormControl>
        </div>
    );
};

export default CustomChakraSelect;