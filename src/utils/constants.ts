import eng from '@/assets/USA.svg';
import esp from '@/assets/ESP.svg';
import fra from '@/assets/FRA.svg';
import por from '@/assets/POR.svg';
import ger from '@/assets/GER.svg';
import { format } from 'date-fns';
const today = format(new Date(), 'MMM dd').split(' ');

const languages: {
    name: string;
    icon: string;
    id: number;
}[] = [{ name: 'ENG', icon: eng, id: 1 }, { name: 'ESP', icon: esp, id: 2 }, { name: 'FRA', icon: fra, id: 3 }, { name: 'POR', icon: por, id: 4 }, { name: 'GER', icon: ger, id: 5 }];
const currencies: { name: string, symbol: string; id: number; }[] = [{ name: 'USD', symbol: '$', id: 1 }, { name: 'EUR', symbol: '€', id: 2 }, { name: 'GBP', symbol: '£', id: 3 }, { name: 'RUB', symbol: '₽', id: 4 }, { name: 'JPY', symbol: '¥', id: 5 }];

const brands: string[] = ['Brand1', 'Brand2', 'Brand2', 'Brand2', 'Brand2', 'Brand2', 'Brand2', 'Brand2', 'Brand2'];


const homeProductsFeatured: {
    name: string,
    category: string,
    isHot: boolean,
    discount: number,
    img: string[],
    rating: number,
    price: number,
}[] = [
        { name: 'Ultimate 3D Bluetooth Speaker', category: 'Speakers', discount: 20, img: ['https://i.ibb.co/XFDMHNQ/product-1.jpg', 'https://i.ibb.co/MkfWbFZ/product-1-2.jpg'], isHot: true, price: 59, rating: 4 }
        ,
        { name: 'Brown Women Casual HandBag', category: 'Ladies Bag', discount: 30, img: ['https://i.ibb.co/kgb6gSk/product-2.jpg', 'https://i.ibb.co/BPH3sqc/product-2-2.jpg'], isHot: true, price: 83, rating: 4 },
        { name: 'Circled Ultimate 3D Speaker', category: 'Speakers', discount: 0, img: ['https://i.ibb.co/hf710WP/product-3.jpg', 'https://i.ibb.co/LYLYD6c/product-3-2.jpg'], isHot: false, price: 49, rating: 4 },
        { name: 'Blue Backpack for the Young - S', category: 'Backpacks', discount: 40, img: ['https://i.ibb.co/8dwFqk3/product-4.jpg', 'https://i.ibb.co/Z2wJSvC/product-4-2.jpg'], isHot: true, price: 65, rating: 5 },
        { name: 'Casual Spring Blue Shoes', category: 'Shoes', discount: 15, img: ['https://i.ibb.co/tX9LHqG/product-5.jpg', 'https://i.ibb.co/NsRM8s3/product-5-2.jpg'], isHot: true, price: 73, rating: 2 },
        {
            category: 'Backpacks', discount: 10, img: ['https://i.ibb.co/qDyWbbN/product-11.jpg', 'https://i.ibb.co/CmjNYKy/product-11-2.jpg'], isHot: true, name: 'Men Sports Travel Bag', price: 45, rating: 4
        }
    ];









const newArrival: {
    name: string,
    category: string,
    isHot: boolean,
    discount: number,
    img: string[],
    rating: number,
    price: number,
}[] = [
        { category: "Belts", discount: 0, img: ['https://i.ibb.co/PY9S90F/product-6.jpg', 'https://i.ibb.co/VWRtsHk/product-6-2.jpg'], isHot: true, name: 'Men Black Gentle Belt', price: 88, rating: 2 },
        { category: 'Shoes', discount: 0, img: ['https://i.ibb.co/7jvbjVX/product-7.jpg', 'https://i.ibb.co/D8mBdNf/product-7-2.jpg'], isHot: true, name: 'Midnight Men Casual Shoes', price: 75, rating: 5 },
        { category: 'Glasses', discount: 20, img: ['https://i.ibb.co/bXXWRP3/product-8.jpg', 'https://i.ibb.co/W0M9dXp/product-8-2.jpg'], isHot: false, name: 'Brown-Black Men Casual Glasses', price: 79, rating: 3 },
        { category: 'Glasses', discount: 30, img: ['https://i.ibb.co/S0wZtSd/product-9.jpg', 'https://i.ibb.co/jbVh9Yw/product-9-2.jpg'], isHot: false, name: 'Black Men Casual Glasses', price: 90, rating: 4 },
        { category: 'Shoes', discount: 0, isHot: true, img: ['https://i.ibb.co/pfFx262/product-10.jpg', 'https://i.ibb.co/85pqq7F/product-10-2.jpg'], name: 'Basketball Sports Blue Shoes', price: 99, rating: 5 },
        { category: 'Ladies Bag', discount: 15, isHot: true, img: ['https://i.ibb.co/j6jMgkM/product-12.jpg', 'https://i.ibb.co/zNYXc44/product-12-2.jpg'], name: 'Brown HandBag', price: 74, rating: 5 }
    ];




const tempMyWishlist: { img: string, name: string, price: number, inStock: boolean; }[] = [{ img: 'https://i.ibb.co/PY9S90F/product-6.jpg', inStock: true, name: 'Men Black Gentle Belt', price: 88 }, { img: 'https://i.ibb.co/7jvbjVX/product-7.jpg', inStock: false, name: 'Brown-Black Men Casual Glasses', price: 75 }, { img: 'https://i.ibb.co/bXXWRP3/product-8.jpg', inStock: true, name: 'Black Men Casual Glasses', price: 79 }];



const categories: {
    name: string,
    img: string,
    quantity: number;
}[] = [{ img: 'https://i.ibb.co/ZH6SJpF/category-1.jpg', name: "Men's", quantity: 5 },
{ img: 'https://i.ibb.co/8X54kLK/category-2.jpg', name: 'Shoes', quantity: 8 },
{ img: 'https://i.ibb.co/F5fzD0p/category-3.jpg', name: 'Glasses', quantity: 10 },
{ img: 'https://i.ibb.co/c3qdjg7/category-4.jpg', name: 'Backpacks', quantity: 12 },
{ img: 'https://i.ibb.co/CPW2347/category-5.jpg', name: 'Ladies Bag', quantity: 25 },
{ img: 'https://i.ibb.co/Bgz25qh/category-6.jpg', name: 'Speakers', quantity: 17 },
{ img: 'https://i.ibb.co/G77m2zT/category-7.jpg', name: 'Watches', quantity: 4 },
{ img: 'https://i.ibb.co/wsQ9sqP/category-8.jpg', name: 'Machines', quantity: 1 },
{ img: 'https://i.ibb.co/qrbQk2L/category-9.jpg', name: 'Sofa', quantity: 12 },
{ img: 'https://i.ibb.co/FqMNrtJ/category-10.jpg', name: 'Headphones', quantity: 23 },
{ img: 'https://i.ibb.co/nbsSBSp/category-11.png', name: 'Belts', quantity: 32 }];



const blogs: { img: string, title: string, published: [string, string], comments: string[], text: string; }[] = [{ comments: [], img: 'https://i.ibb.co/Cns2Mn3/post-1.jpg', published: [today[0], today[1]], title: 'Top New Collection', text: "In our fast-paced world, maintaining a healthy diet can sometimes feel like a daunting task. However, making small, sustainable changes to your eating habits can have a significant impact on your overall well-being. In this blog post, we'll explore some tips for cultivating healthy eating habits that can help you lead a more balanced life." }, { img: 'https://i.ibb.co/L8m9nN4/post-2.jpg', comments: [], published: [today[0], today[1]], title: 'Fashion Trends', text: "The foundation of a healthy diet is a balanced plate. Aim to fill half your plate with vegetables and fruits, one-quarter with lean protein sources like chicken, fish, or tofu, and the remaining quarter with whole grains like quinoa or brown rice. This balance ensures you get a variety of essential nutrients." }, { comments: [], img: 'https://i.ibb.co/xht4mNn/post-3.jpg', published: [today[0], today[1]], title: 'Right Choices', text: "Water is essential for good health. Make it a habit to drink plenty of water throughout the day. If plain water doesn't excite you, try infusing it with slices of citrus fruits or herbs like mint for added flavor." }, { comments: [], img: 'https://i.ibb.co/7SddqtB/post-4.jpg', published: [today[0], today[1]], title: 'Perfect Accessories', text: "Opt for whole, unprocessed foods whenever possible. Whole foods like fruits, vegetables, nuts, and seeds are packed with vitamins, minerals, and fiber. They're also free from the added sugars, preservatives, and unhealthy fats often found in processed foods." }];

const tempBrands: string[] = ['https://i.ibb.co/SwzGcrh/brand1.png', 'https://i.ibb.co/hyhpJ8m/brand2.png', 'https://i.ibb.co/G7xCkHd/brand3.png', 'https://i.ibb.co/tbG8rTX/brand4.png', 'https://i.ibb.co/SmbwrPz/brand5.png', 'https://i.ibb.co/VwLQDRn/brand6.png', 'https://i.ibb.co/jVT43yt/brand7.png', 'https://i.ibb.co/JzyW0cw/brand8.png', 'https://i.ibb.co/vdLbxqy/brand9.png', 'https://i.ibb.co/B4c6t9m/brand10.png', 'https://i.ibb.co/C1ypWLv/brand11.png', 'https://i.ibb.co/SRnQ8Y9/brand12.png', 'https://i.ibb.co/hD0vtYB/brand13.png'];




export { languages, currencies, categories, brands, homeProductsFeatured, newArrival, blogs, tempBrands, tempMyWishlist };




