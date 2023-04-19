import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import SearchBox from '@/components/SearchBox';
import CardSearch from '@/components/Card/card.search';

import { PATH } from "@/constants/path";
import { Data, Article } from "@/interfaces";
import { filterTitle } from "@/helper";
import { everything } from '@/api/newsapi';

interface Search {
  data: Data
}

function Search({ data }: Search) {
  const router = useRouter();
  const { q } = router.query;

  const [posts, setPosts] = useState<Article[]>([]);

  useEffect(() => {
    setPosts(data.articles);
  }, [])

  const renderNews = () => {
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
  }

  return (
    <Layout pageTitle={`Outsider - Search Results`}>
      <section>
        <div className='px-5'>
          <SearchBox defaultKeyword={q}></SearchBox>
        </div>
      </section>

      <section className='mt-8'>
        <div className='px-5'>
          <h1 className='text__large'>{`Results for "${q}"`}</h1>
        </div>
      </section>

      <section className='mt-6'>
        <div className='px-5'>
          <div className="grid grid-cols-1 gap-y-4">
            {renderNews()}
          </div>
        </div>
      </section>
    </Layout>
  )
}

// export async function getStaticProps() {
export async function getServerSideProps(context: { query: any }) {
  const { query } = context;

  const data = await everything({ q: query.q });

  return {
    props: { data },
    // revalidate: 60 * 15
  }
}

export default Search