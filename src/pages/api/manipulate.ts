import type { NextApiRequest, NextApiResponse } from 'next';
import data from './../../../public/data.json';
import img from './../../../public/img.json';


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {


    const arr = [];
    data.forEach((item, index) => {
        const data = { ...item, img: img[index]?.['Manipulated Image Link'] };
        arr.push(data);
    });
    res.status(200).json(arr);
}