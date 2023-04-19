import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import Layout from '@/components/Layout';
import CardCompact from '@/components/Card/card.compact';

import { PATH } from "@/constants/path";
import { Data, Article } from "@/interfaces";
import { filterTitle } from "@/helper";
import { headline } from '@/api/newsapi';

interface Category {
  data: Data;
  test: any;
}

function Category({ data }: Category) {
  const router = useRouter();
  const { name } = router.query;

  const [posts, setPosts] = useState<Article[]>([]);
  // const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPosts(data.articles);
  }, []);

  // const loadMore = async () => {
  //   const res =
  //     await fetch('/api/middle?q=test')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       })
  // }

  // const handleScroll = () => {
  //   const scrollTop = document.documentElement.scrollTop;
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const clientHeight = document.documentElement.clientHeight;

  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     loadMore();
  //   }
  // }

  useEffect(() => {
    setPosts(data.articles);

    // window.addEventListener('scroll', handleScroll);

    // return () => {
    //   const next = page + 1;
    //   setPage(next);

    //   window.removeEventListener('scroll', handleScroll);
    // }
  }, [data]);

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
        </div>
      </section>
    </Layout>
  )
}

// export async function getStaticProps() {
export async function getServerSideProps(context: { params: any }) {
  const { params } = context;

  const data = await headline({ category: params.name });

  return {
    props: { data },
    // revalidate: 60 * 15
  }
}

export default Category