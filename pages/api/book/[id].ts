import type { NextApiRequest, NextApiResponse } from 'next'

import books from '../../../utilites/book.json'

type Data = {};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    let { id } = req.query;
    let idx = books.findIndex(el => el.pid.toString() === id);
    res.status(200).json(books[idx]);
  }
}



