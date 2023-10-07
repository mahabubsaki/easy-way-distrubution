import MapLocation from '@/components/contactus/MapLocation';
import CustomDarkButton from '@/components/helpers/CustomDarkButton';
import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import UserLayout from '@/layouts/UserLayout';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import axios from 'axios';
import Head from 'next/head';
import React, { FormEvent } from 'react';
import { BiEnvelope } from 'react-icons/bi';
import { FaCalendarAlt, FaMobileAlt } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';

const ContactUs = () => {
    const contactinfo = [
        {
            icon: <SlLocationPin className="text-6xl text-[#08c] mb-4" />,
            title: 'Address',
            text: '218 Nw 7ave hometad Fl 33030'
        },
        {
            icon: <FaMobileAlt className="text-6xl text-[#08c] mb-4" />,
            title: 'Phone Number',
            text: '+13056971810'

        },
        {
            icon: <BiEnvelope className="text-6xl text-[#08c] mb-4" />,
            title: 'Mail',
            text: 'mail@shophouse.com'
        },
        {
            icon: <FaCalendarAlt className="text-6xl text-[#08c] mb-4" />,
            title: 'Working Days',
            text: 'Mon - Sun / 9:00AM - 8:00PM'
        }
    ];
    const faq = [
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover) as well as PayPal,Bkash and Nagad.'
        },
        {
            question: 'What is your shipping policy?',
            answer: 'We offer free standard shipping on all orders over $100. For orders under $100, standard shipping is a flat rate of $5.99.Which Orders typically arrive within 5-7 business days, but this can vary depending on the shipping destination and any unforeseen delays. We also offer expedited shipping options like express shipping for an additional fee and In store pickup for free cost.'
        },
        {
            question: 'What is your return policy?',
            answer: "We offer a 7-day return policy for all items purchased on our website. If you're not satisfied with your purchase for any reason, you can return it for a full refund or exchange. Items must be in new, unused condition with all original packaging and tags attached."
        },
        {
            question: 'Can I track my order and receive updates?',
            answer: 'Yes, you can track your order by logging into your account, going to dashboard select orders and clicking on the Actions > View Details. We will also send you email updates with tracking information as your order moves through the shipping process.'
        },
        {
            question: 'How do I contact customer support?',
            answer: 'You can reach our customer support team by emailing mail@shophouse.com or by calling our  number at +13056971810. Our customer support team is available Monday through Sunday from 9am to 8pm GMT+6.'
        },
        {
            question: 'Do you offer any discounts or promotions?',
            answer: 'Yes, we occasionally offer discounts and promotions to both first-time customers and regular shoppers. To stay up-to-date on our latest deals, sign up for our email newsletter and follow us on social media.'
        },
    ];
    return (
        <>
            <Head>
                <title>{`Contact Us | Easy Way Distribution`}</title>
                <meta name='description' content={`Shop till you drop with our e-commerce platform! Review your shopping cart and checkout with ease. Enjoy secure payment and fast delivery options. Start shopping today!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="favicon2.ico" />
            </Head>
            <UserLayout>

                <div className='max-w-[1200px] mx-auto px-[10px]'>
                    <BreadCrumpNavigator paths={['Contact-Us']} />

                </div>
                <div className='mb-[50px]'>
                    <MapLocation />
                </div>
                <div className='max-w-[1200px] mx-auto px-[10px]'>
                    <div>
                        <p className='text-[24px] font-bold text-[#222529] mb-2'>Contact Info</p>
                        <p className='text-[14px] text-[#777] mb-4'>We value your feedback, questions, and inquiries. Feel free to reach out to us through the following channels:</p>
                    </div>
                    <div className='px-[10px] mb-[40px] gap-x-5 gap-y-8 grid grid-flow-dense' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                        {contactinfo.map(({ icon: Icons, text, title }, index) => <div key={index} className='flex flex-col items-center'>
                            {Icons}
                            <p className='text-[20px] font-bold mb-1 leading-5 text-[#222529]'>{title}</p>
                            <p className='text-[#777] text-[14px] leading-5 mb-5'>{text}</p>
                        </div>)}
                    </div>
                    <div className='px-[10px] pb-[6px] mb-20 border-t flex flex-col lg:flex-row gap-[10px] border-[#eee]'>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-[24px] text-[#222529] font-bold mt-[60px] mb-[20px]'>Send Us a Message</p>
                            <form autoComplete='new-password' onSubmit={async (e: FormEvent) => {
                                e.preventDefault();
                                try {
                                    const { data } = await axios.post('/api/emailsend', { email: (e.target as HTMLFormElement).email.value, text: (e.target as HTMLFormElement).text.value });
                                    alert('Message send successfully');
                                } catch (err) {
                                    console.log(err);
                                }
                            }} className='py-[10px] flex flex-col gap-[18px]'>
                                <div>
                                    <FormControl isRequired>
                                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>Your Name </span></FormLabel>
                                        <Input name='name' autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl isRequired>
                                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>Your E-mail </span></FormLabel>
                                        <Input name='email' autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl isRequired>
                                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>Your Message </span></FormLabel>
                                        <Textarea name='text' resize={'none'} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} py={'3'} height={'2xs'} color={'option.400'} />
                                    </FormControl>
                                </div>
                                <div className='inline-block'>
                                    <CustomDarkButton type={true}>SEND MESSAGE</CustomDarkButton>
                                </div>
                            </form>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-[24px] text-[#222529] font-bold mt-[60px] mb-[20px]'>Frequently Asked Questions</p>
                            <Accordion allowToggle>
                                {faq.map(({ question, answer }, index) => <AccordionItem key={index}>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" fontSize={'16px'} fontWeight={'semibold'} flex='1' textAlign='left'>
                                                {question}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel color={'#777'} fontSize={'14px'} pb={4}>
                                        <p>{answer}</p>
                                    </AccordionPanel>
                                </AccordionItem>)}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
};

export default ContactUs;