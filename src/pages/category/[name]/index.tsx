import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import Layout from '@/components/Layout';
import CardCompact from '@/components/CardCompact';

import { PATH, API_KEY } from "@/constants";
import { Data, Article } from "@/interfaces";
import { filterTitle } from "@/helper";

interface Category {
  data: Data;
}

function Category({ data }: Category) {
  const router = useRouter();
  const { name } = router.query;

  const [posts, setPosts] = useState<Article[]>([]);

  useEffect(() => {
    setPosts(data.articles);
  }, [])


  const renderNews = () => {
    const news = posts.map(post => {
      const { source, urlToImage, title, description, url } = post;

      const compiledTitle = filterTitle(source.name, title);

      return (
        <CardCompact
          key={title}
          media={source.name}
          image={PATH.staticImage.concat(urlToImage)}
          title={compiledTitle}
          description={description}
          url={url}
        ></CardCompact>
      )
    })

    return news;
  }

  return (
    <Layout pageTitle={`Outsider - ${name}`}>
      <section className='mt-10'>
        <div className='px-5'>
          <h1 className='text-2xl text-blue-primary dark:text-blue-secondary tracking-widest font-bold uppercase'>{name}</h1>
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
        </div>
      </section>
    </Layout>
  )
}

// export async function getStaticProps() {
export async function getServerSideProps(context: { params: any }) {
  const { params } = context;

  try {
    // can't mix sources param with the country or category params.
    const queries = {
      country: "us",
      category: params.name,
      sources: "",
      q: "",
      pageSize: 10,
      page: 1
    }

    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${queries.country}&category=${queries.category}&sources=${queries.sources}&q=${queries.q}&pageSize=${queries.pageSize}&page=${queries.page}&apiKey=${API_KEY}`, {
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

export default Category