import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Checkbox, Icon, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from '@/styles/SortFilterDrawer.module.css';
import { MdDone } from 'react-icons/md';


const CustomSubItem = ({ checkedItems, subitem, setCheckedItems, mainItem, isInclude, setIsInclude }: { checkedItems: string[], subitem: string, setCheckedItems?: React.Dispatch<React.SetStateAction<string[]>>, mainItem: string[], isInclude: boolean, setIsInclude: React.Dispatch<React.SetStateAction<boolean>>; }) => {
    useEffect(() => {
        const temp = [];
        for (const single of checkedItems) {
            if (mainItem.includes(single)) {
                temp.push(single);
            }
        }
        if (temp.length && temp.length === mainItem.length) {
            setIsInclude(true);
        } else {
            setIsInclude(false);
        }
    }, [checkedItems]);
    return (


        <div className={`flex gap-1 ${styles.container} flex gap-1`}>
            <label className={styles.checkbox}>
                <input onChange={(e) => {
                    if (!e.target.checked) {
                        if (setCheckedItems) {
                            setCheckedItems((pre) => pre.filter(item => item != subitem));
                        }
                    } else {
                        if (setCheckedItems) {
                            setCheckedItems((pre) => {
                                const all = [...pre, subitem];
                                const unique = [... new Set(all)];
                                return unique;
                            });
                        }
                    }
                }} checked={checkedItems.includes(subitem)} type="checkbox" />
                <span className={styles.checkbox__control}></span>
                {subitem}
            </label>
        </div>


    );
};


const CustomItem = ({ item, pi, checkedItems, setCheckedItems }: { item: { name: string, subCategory: string[]; }, pi: number, checkedItems: string[], setCheckedItems?: React.Dispatch<React.SetStateAction<string[]>>; }) => {
    const [isInclude, setIsInclude] = useState(false);
    return (<AccordionItem key={pi} border={0}>
        <div className={`${styles.container} flex`} >
            <label className={styles.checkbox2}>
                <input type={'checkbox'} checked={isInclude} onChange={(e) => {
                    const checked = e.target.checked;
                    if (checked) {
                        setIsInclude(true);
                        const all = [...checkedItems, ...item.subCategory];
                        if (setCheckedItems) {
                            setCheckedItems([... new Set(all)]);
                        }
                    } else {
                        const temp = [];
                        for (const x of checkedItems) {
                            if (!item.subCategory.includes(x)) {
                                temp.push(x);
                            }
                        }
                        if (setCheckedItems) {
                            setCheckedItems([...temp]);
                        }
                        setIsInclude(false);
                    }

                }} id='parent' className='relative top-1' />
                <span className={styles.checkbox__control}></span>
            </label>
            <AccordionButton _hover={{}} className='border-0 flex justify-between items-center text-[#777]  text-[14px]'>

                <span>
                    <span className='hover:text-[#08c] cursor-pointer duration-500'>{item.name}<span className='ml-[3px] '>({item.subCategory.length})</span>
                    </span>
                </span>
                {item.subCategory.length ? <AccordionIcon /> : null}
            </AccordionButton> </div>
        {item.subCategory.length ? <AccordionPanel pb={'5px'} className='flex flex-col gap-3 text-[#777] ml-[14px]'>
            {item.subCategory.map((subitem, ci) => <CustomSubItem isInclude={isInclude} setIsInclude={setIsInclude} setCheckedItems={setCheckedItems} checkedItems={checkedItems} mainItem={item.subCategory} subitem={subitem} key={ci} />)}
        </AccordionPanel> : null}
    </AccordionItem>);
};

const CustomAccordion = ({ section, allCategories, colors, sizes, checkedItems, setCheckedItems, price, setPrice, selectedColor, setSelectedColor, selectedSize, setSelectedSize }: { section: string, allCategories?: { name: string, subCategory: string[], }[], colors?: string[], sizes?: string[], checkedItems?: string[], setCheckedItems?: React.Dispatch<React.SetStateAction<string[]>>, setPrice?: React.Dispatch<React.SetStateAction<number[]>>, price?: number[], setSelectedColor?: React.Dispatch<React.SetStateAction<string[]>>, selectedColor?: string[], setSelectedSize?: React.Dispatch<React.SetStateAction<string[]>>, selectedSize?: string[]; }) => {
    const [open, setOpen] = useState(true);




    return (
        <AccordionItem border={0} borderBottom={'1px'} paddingY={'20px'} paddingX={'-30px'} marginX={'-10px'} borderColor={'#E7E7E7'}>

            <AccordionButton onClick={() => setOpen(!open)} _hover={{}} className='border-0 flex justify-between text-[#313131] text-[17px] items-center font-bold'>
                <span className='uppercase'>{section}</span>
                <Icon as={open ? AiOutlinePlus : AiOutlineMinus} />
            </AccordionButton>

            <AccordionPanel p={0} className='ml-[14px]'>
                {
                    section === 'category' ? <Accordion allowToggle allowMultiple >
                        {allCategories?.map((item, pi) => <CustomItem item={item} pi={pi} key={pi} checkedItems={checkedItems || []} setCheckedItems={setCheckedItems} />)}
                    </Accordion> : null
                }
                {section === 'price' ?
                    <div>
                        <div className='py-[10px] px-[5px]'>
                            <RangeSlider onChange={(value) => {
                                if (setPrice) {
                                    setPrice([...value]);
                                }
                            }} w={'95%'} mx='auto' colorScheme={'brand'} aria-label={['min', 'max']} max={1000} min={0} defaultValue={[0, 1000]}>
                                <RangeSliderTrack>
                                    <RangeSliderFilledTrack />
                                </RangeSliderTrack>
                                <RangeSliderThumb bgColor={'dot.400'} color={'darkseagreen'} index={0} />
                                <RangeSliderThumb bgColor={'dot.400'} index={1} />
                            </RangeSlider>
                        </div>
                        <div className='mt-[10px] flex justify-between items-center px-2'>
                            <p className='text-[13px] leading-8 text-[#777]'>Select Price range</p>
                            <p className='text-[#777] text-[13px]'>-</p>
                            <p className='text-[13px] text-[#777] '>
                                {price ? `${price[0]} - ${price[1]}` : null}
                            </p>
                        </div>
                    </div>
                    : null}
                {
                    section === 'color' ?
                        <div className='flex py-[6px] flex-wrap gap-[6px]'>
                            {colors?.map((item, index) => <div onClick={() => {
                                if (!selectedColor || !setSelectedColor) return;
                                if (!selectedColor.includes(item)) {
                                    setSelectedColor((pre) => [...pre, item]);
                                } else if (selectedColor.length > 1) {
                                    setSelectedColor((pre) => pre.filter(i => i !== item));
                                } else {
                                    // gigive an alert;
                                }
                            }} style={{ backgroundColor: item }} key={item} className={`w-[28px] h-[28px] relative flex justify-center cursor-pointer items-center`}>
                                {selectedColor?.includes(item) ? <MdDone className={`${(index == 4 || index == 5 || index == 7 || index == 8) ? 'text-black' : 'text-white'} font-bold text-2xl`} /> : null}
                            </div>)}
                        </div>
                        :
                        null
                }
                {
                    section === 'size' ?
                        <div className='flex py-[6px] gap-[6px]'>
                            {sizes?.map(item => <div onClick={() => {
                                if (!selectedSize || !setSelectedSize) return;
                                if (!selectedSize.includes(item)) {
                                    setSelectedSize((pre) => [...pre, item]);
                                } else if (selectedSize.length > 1) {
                                    setSelectedSize((pre) => pre.filter(i => i !== item));
                                } else {
                                    // give an alert;
                                }
                            }} key={item} className={`py-1 px-2 cursor-pointer duration-500 hover:text-white hover:border-[#08c] border  hover:bg-[#08c] text-[11px] ${selectedSize?.includes(item) ? 'bg-[#08c] text-white border-[#08c]' : 'bg-white text-[#777] border-[#E9E9E9]'}`}>
                                {item}
                            </div>)}
                        </div>
                        :
                        null
                }

            </AccordionPanel>
        </AccordionItem>
    );
};

export default CustomAccordion;