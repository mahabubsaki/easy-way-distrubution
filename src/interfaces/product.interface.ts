export default interface IProduct {
    img: string[];
    price: number;
    discount: number;
    sku: string;
    subCategory: string;
    name: string;
    category: string;
    specialType: string | null;
    isHot: boolean;
    stock: number;
    description: string;
    weight: number;
    dimensions: number[];
    colors: string[];
    sizes: string[];
    rating: number;
}