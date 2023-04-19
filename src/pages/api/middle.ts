// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// import { headline } from '@/api/newsapi';

import { Data } from '@/interfaces';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('ini adalah', req.query);

  const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=dbf1c7765b624e9b88f395f84220595c&category=&sources=&q&pageSize=5&page=1");
  const data = await response.json();

  res.status(200).json(data);
}
