import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

import { PATH } from "@/constants/path";
import { Data, Article } from "@/interfaces";
import { filterTitle } from "@/helper";

import Layout from '@/components/Layout';
import Button from '@/components/Button';
import SearchBox from '@/components/SearchBox';
import CardSearch from '@/components/Card/card.search';
import Loader from '@/components/Loader';

interface Search {
  data: Data;
  host: string;
}

const CONFIG: { perPage: number, loadingDelay: number } = {
  perPage: 20,
  loadingDelay: 3000 // 3s
}

function Search({ data, host }: Search) {
  const router = useRouter();
  const { q } = router.query;

  const [posts, setPosts] = useState<Article[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setPosts(data.articles);
  }, [])

  useEffect(() => {
    const pagination = Math.ceil(data.totalResults / CONFIG.perPage);
    const checkNext = page >= pagination ? false : true;

    setHasNext(checkNext);
  }, [posts])

  const loadMore = async () => {
    setIsLoading(true);

    try {
      const next = page + 1;
      setPage(next);

      const fetchedPosts = await fetch(`${host}api/newsapi/everything?q=${q}&pageSize=${CONFIG.perPage}&page=${next}`).then(res => res.json());

      const { status, code, articles } = fetchedPosts;

      if (status !== "error" || code !== "maximumResultsReached") {
        setTimeout(() => {
          setIsLoading(false);

          setPosts([
            ...posts,
            ...articles
          ]);
        }, CONFIG.loadingDelay);

      } else {
        setTimeout(() => {
          setIsLoading(false);

          throw Error(code);
        }, CONFIG.loadingDelay);
      }
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);

        console.log(error);
      }, CONFIG.loadingDelay);
    }
  }

  const renderNews = () => {
    if (posts && posts.length > 0) {
      const news = posts.map(post => {
        const { source, urlToImage, title, publishedAt, url } = post;

        const compiledTitle = filterTitle(source.name, title);

        return (
          <CardSearch
            key={title}
            media={source.name}
            image={PATH.staticImage.concat(urlToImage)}
            title={compiledTitle}
            date={publishedAt}
            url={url}
          ></CardSearch>
        )
      })

      return news;
    } else {
      return (
        <>no post</>
      )
    }
  }

  return (
    <Layout pageTitle={`Outsider - Search Results`} apiStatusCode={data.code}>
      <section>
        <div className='px-5'>
          <SearchBox defaultKeyword={q}></SearchBox>
        </div>
      </section>

      <section className='mt-8'>
        <div className='px-5'>
          <h1 className='text__large dark:text-white-secondary'>{`Results for "${q}"`}</h1>
        </div>
      </section>

      <section className='mt-6'>
        <div className='px-5'>
          <div className="grid grid-cols-1 gap-y-4">
            {renderNews()}
          </div>
          {
            (q && q.length > 0 && hasNext && !isLoading) &&
            (<div className='mt-10 text-center'>
              <Button type="primary" action={() => loadMore()}>Load more</Button>
            </div>)
          }
          {
            isLoading && <Loader></Loader>
          }
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const { query } = context;

  const HOST = process.env.HOST;

  const data = await fetch(`${HOST}api/newsapi/everything?q=${query.q}&pageSize=${CONFIG.perPage}`).then(res => res.json());

  return {
    props: {
      data,
      host: HOST
    },
  }
}

export default Search