import IProduct from "@/interfaces/product.interface";
import axios from "axios";

export async function fetchProducts(pageSize: number, pageNumber: number, sort: string, type: boolean, filterObj: {}): Promise<{ products: IProduct[], totalProduct: number; }> {

    const { data } = await axios({ method: 'POST', baseURL: `http://localhost:6970/api/products?pageSize=${pageSize}&pageNumber=${pageNumber}&sort=${sort}&type=${type}`, data: filterObj });
    return { products: data.products, totalProduct: data.totalProduct };
}