import type { NextApiRequest, NextApiResponse } from 'next'

import books from '../../utilites/book.json'

type Data = {};

export default function AllBooks(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method === 'GET'){
        res.status(200).json(books);
    }
}
