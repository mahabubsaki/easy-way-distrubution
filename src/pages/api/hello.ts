import type { NextApiRequest, NextApiResponse } from 'next';
import data from './../../../public/data.json';


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {




    res.status(200).json([...new Set(data.map(i => i.category))]);
}