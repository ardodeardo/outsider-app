// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Data } from '@/interfaces';
import { Headlines, Everything } from "@/interfaces/api.query";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { endpoint } = req.query;

  const CONFIG = {
    key: 'dbf1c7765b624e9b88f395f84220595c',
    domain: "https://newsapi.org/v2/"
  }

  switch (endpoint) {
    case 'headline':
      try {
        const { country, category, sources, q, pageSize, page }: Headlines = req.query;

        // can't mix sources param with the country or category params.
        const queries = {
          q: q ? q : "",
          country: country ? country : "us",
          category: category ? category : "",
          sources: sources ? sources : "",
          pageSize: pageSize ? pageSize : 10,
          page: page ? page : 1
        }

        let url = `${CONFIG.domain}top-headlines`;

        url = url.concat(`?apiKey=${CONFIG.key}`);
        url = url.concat(`&country=${queries.country}`);
        url = url.concat(`&category=${queries.category}`);
        url = url.concat(`&sources=${queries.sources}`);
        url = url.concat(`&q=${queries.q}`);
        url = url.concat(`&pageSize=${queries.pageSize}`);
        url = url.concat(`&page=${queries.page}`);

        const response = await fetch(url, { method: "GET" });
        const data = await response.json();

        res.status(200).json(data);
      } catch (error) {
        console.log(`error`, error)
      }

      break;

    case 'everything':
      try {
        const { q, language, sortBy, pageSize, page, from, to }: Everything = req.query;

        const queries = {
          q: q,
          language: language ? language : "en",
          sortBy: sortBy ? sortBy : "",
          pageSize: pageSize ? pageSize : 10,
          page: page ? page : 1,
          from: from ? from : "",
          to: to ? to : "",
        }

        let url = `${CONFIG.domain}everything`;

        url = url.concat(`?apiKey=${CONFIG.key}`);
        url = url.concat(`&q=${queries.q}`);
        url = url.concat(`&sortBy${queries.sortBy}`);
        url = url.concat(`&pageSize=${queries.pageSize}`);
        url = url.concat(`&page=${queries.page}`);

        const response = await fetch(url, { method: "GET" });
        const data = await response.json();

        res.status(200).json(data);
      } catch (error) {
        console.log(`error`, error);
      }

      break;

    // case 'sources':
    //   try {
    //     let url = `${CONFIG.domain}sources?apiKey=${CONFIG.key}`;

    //     const response = await fetch(url, { method: "GET" });
    //     const data = await response.json();

    //     res.status(200).json(data);
    //   } catch (error) {
    //     console.log(`error`, error);
    //   }

    //   break;

    default:
      const error = {
        status: 'error',
        totalResults: 0,
        articles: [],
      }

      res.status(502).json(error);

      break;
  }
}
