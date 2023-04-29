import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import Layout from '@/components/Layout';
import Button from '@/components/Button';
import CardCompact from '@/components/Card/card.compact';
import LimitApi from '@/components/Limit/limit.api';

import { PATH } from "@/constants/path";
import { Data, Article } from "@/interfaces";
import { filterTitle } from "@/helper";
import { headline } from '@/api/newsapi';

interface Category {
  data: Data;
}

const CONFIG = {
  perPage: 20
}

function Category({ data }: Category) {
  const router = useRouter();
  const { name } = router.query;

  const [posts, setPosts] = useState<Article[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasNext, setHasNext] = useState<boolean>(false);

  useEffect(() => {
    setPosts(data.articles);
  }, []);


  useEffect(() => {
    const pagination = Math.ceil(data.totalResults / CONFIG.perPage);
    const checkNext = page >= pagination ? false : true;

    setHasNext(checkNext);
  }, [posts])


  const loadMore = async () => {
    try {
      const next = page + 1;
      setPage(next);

      const fetchedPosts = await fetch(`http://localhost:3000/api/newsapi/headline?category=${name}&pageSize=${CONFIG.perPage}&page=${next}`).then(res => res.json());

      console.log(fetchedPosts);

      setPosts([
        ...posts,
        ...fetchedPosts.articles
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  const renderNews = () => {
    if (posts && posts.length > 0) {
      const news = posts.map(post => {
        const { source, urlToImage, title, description, url } = post;

        const compiledTitle = filterTitle(source.name, title);

        return (
          <CardCompact
            key={`p${page}_${title}`}
            media={source.name}
            image={PATH.staticImage.concat(urlToImage)}
            title={compiledTitle}
            description={description}
            url={url}
          ></CardCompact>
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
    <Layout pageTitle={`Outsider - ${name}`} apiStatusCode={data.code}>
      <section className='mt-8'>
        <div className='px-5'>
          <h1 className='text-xl text-blue-primary dark:text-blue-secondary tracking-widest font-bold uppercase'>{name}</h1>
        </div>
      </section>

      <section className="mt-3">
        <div className='px-5'>
          <span className="block border-b border-grey-thin"></span>
        </div>
      </section>

      <section className="mt-6">
        <div className='px-5'>
          <div className="grid grid-cols-1 gap-y-6">
            {renderNews()}
          </div>
          {
            hasNext && (<div className='mt-10 text-center'>
              <Button type="primary" action={() => loadMore()}>Load more</Button>
            </div>)
          }
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const { params } = context;

  const data = await fetch(`${process.env.HOST}api/newsapi/headline?category=${params.name}&pageSize=${CONFIG.perPage}`).then(res => res.json());

  return {
    props: { data },
  }
}

export default Category