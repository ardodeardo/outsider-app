import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import SearchBox from '@/components/SearchBox';
import CardSearch from '@/components/CardSearch';

import { PATH, API_KEY } from "@/constants";
import { Data, Article } from "@/interfaces";
import { filterTitle } from "@/helper";

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

  try {
    // can't mix sources param with the country or category params.
    const queries = {
      q: query.q,
      pageSize: 10,
      page: 1,
      from: "",
      to: "",
      language: "en"
    }


    const response = await fetch(`https://newsapi.org/v2/everything?q=${queries.q}&pageSize=${queries.pageSize}&page=${queries.page}&apiKey=${API_KEY}`, {
      method: "GET"
    });

    const data = await response.json();

    return {
      props: { data },
      // revalidate: 60 * 15
    }
  } catch (error) {
    console.log(`error`, error);
  }
}

export default Search