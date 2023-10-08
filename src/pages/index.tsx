import Head from 'next/head';
import UserLayout from '@/layouts/UserLayout';
import SliderHeader from '@/components/home/SliderHeader';
import SliderFeature from '@/components/home/SliderFeature';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import SaleBanner from '@/components/home/SaleBanner';
import CategoriesSlider from '@/components/home/CategoriesSlider';
import Services from '@/components/home/Services';
import ParallexPromo from '@/components/home/ParallexPromo';
import LatestNews from '@/components/home/LatestNews';
import BrandsMarquee from '@/components/home/BrandsMarquee';

// import apolloClient from '@/configs/apollo-client.config';
import { GetStaticProps } from 'next';



type PageDataType = {
  allCategories: string[];
};


export default function Home(props: PageDataType) {

  return (
    <>
      <Head>
        <title>Home | Easy Way Distribution</title>
        <meta name="description" content="Welcome to our Easy Way Distribution Discover our extensive selection of products and find the perfect one to meet your needs. Shop with confidence with our secure checkout and experience the convenience of online shopping. Explore our exclusive range of products and enjoy fast shipping on all orders. Our website is designed to make your shopping experience easy and enjoyable. We offer a wide variety of products from leading brands and strive to provide the best customer service possible. Our dedicated team is always ready to assist you with any questions or concerns you may have. We take pride in our high-quality products and are committed to providing you with a seamless shopping experience. Browse our website and find everything you need to enhance your lifestyle. From home decor to personal care items, we've got you covered. We are constantly updating our inventory with the latest trends and products to keep you up-to-date with the latest styles. Shop now and enjoy our competitive prices and unbeatable quality. Our products are guaranteed to meet your expectations and exceed your satisfaction. Don't miss out on our exclusive deals and promotions. Sign up for our newsletter to stay informed about our latest products and offers. Thank you for choosing our online store as your shopping destination. We look forward to serving you!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <UserLayout>

        <SliderHeader />
        <SliderFeature />
        <FeaturedProducts />
        <SaleBanner />
        <CategoriesSlider />

        {/* <Services /> */}
        <ParallexPromo />

        {/* <LatestNews /> */}
        <BrandsMarquee />
      </UserLayout>
    </>
  );
}


export const getStaticProps: GetStaticProps<PageDataType> = async () => {
  return {
    props: {
      allCategories: ['hi'],
    },
    revalidate: 86400
  };
};