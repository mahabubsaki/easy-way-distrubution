import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import fsPromises from 'fs/promises';
import path from 'path';
import UserLayout from '@/layouts/UserLayout';
import HomeSingleProduct from '@/components/common/map/HomeSingleProduct';
export const getStaticProps = async ({ params }) => {
    const filePath = path.join(process.cwd(), 'public/data.json');

    const jsonData = await fsPromises.readFile(filePath, 'utf-8');

    const objectData = JSON.parse(jsonData);

    const products = objectData.filter(i => i.category == params.name);
    return {
        props: {
            products,
            name: params.name
        }
    };
};


export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'public/data.json');

    const jsonData = await fsPromises.readFile(filePath, 'utf-8');

    const objectData = JSON.parse(jsonData);

    const paths = objectData.map((item) => ({
        params: { name: item.category },
    }));

    return { paths, fallback: false };
}


const CategoryProducts = ({ products, name }) => {

    return (
        <>
            <Head>
                <title>{name} | Easy Way Distribution</title>
                <meta name="description" content="Welcome to our Easy Way Distribution Discover our extensive selection of products and find the perfect one to meet your needs. Shop with confidence with our secure checkout and experience the convenience of online shopping. Explore our exclusive range of products and enjoy fast shipping on all orders. Our website is designed to make your shopping experience easy and enjoyable. We offer a wide variety of products from leading brands and strive to provide the best customer service possible. Our dedicated team is always ready to assist you with any questions or concerns you may have. We take pride in our high-quality products and are committed to providing you with a seamless shopping experience. Browse our website and find everything you need to enhance your lifestyle. From home decor to personal care items, we've got you covered. We are constantly updating our inventory with the latest trends and products to keep you up-to-date with the latest styles. Shop now and enjoy our competitive prices and unbeatable quality. Our products are guaranteed to meet your expectations and exceed your satisfaction. Don't miss out on our exclusive deals and promotions. Sign up for our newsletter to stay informed about our latest products and offers. Thank you for choosing our online store as your shopping destination. We look forward to serving you!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon2.ico" />
            </Head>
            <UserLayout>
                <section className='my-5 px-5'>
                    <p className='text-center text-2xl'>Total <span className='font-bold'>{products.length}</span> Products in <span className='font-bold'>{name}</span> Category</p>
                    <div className='grid my-5 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-[1200px] mx-auto '>
                        {products.map((item, i) => <HomeSingleProduct item={item} key={i} delay={i} isFeatured={undefined} isNewArrival={undefined} productName={undefined} section={undefined} />)}
                    </div>
                </section>

            </UserLayout>
        </>
    );


};

export default CategoryProducts;