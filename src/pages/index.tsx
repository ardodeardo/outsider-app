import Layout from "@/components/Layout";

import Category from "@/components/Category";
import CardHeadline from "@/components/CardHeadline";
import CardCompact from "@/components/CardCompact";
import FeedHeadline from "@/components/FeedHeadline";

import { PATH, API_KEY } from "@/constants";
import { Data, Article } from "@/interfaces";
import { filterTitle } from "@/helper";

interface Home {
  data: Data;
}

function Home({ data }: Home) {
  const articleList: Array<Article> = data.articles;

  const renderKV = () => {
    // news #1
    const { source, urlToImage, title, url } = articleList[0];

    const compiledTitle = filterTitle(source.name, title);

    return (
      <CardHeadline
        media={source.name}
        image={PATH.staticImage.concat(urlToImage)}
        title={compiledTitle}
        url={url}
      />)
  }

  const renderFollowingHeadlines = () => {
    // news #2 - #5
    const topFour = articleList.slice(1, 5);

    const posts = topFour.map(post => {
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

    return posts;
  }

  const renderFeaturingHeadlines = () => {
    // news #6 - #10
    const topFour = articleList.slice(5);

    const posts = topFour.map(post => {
      const { source, title, url } = post;

      const compiledTitle = filterTitle(source.name, title);

      return (
        <FeedHeadline
          key={title}
          media={source.name}
          title={compiledTitle}
          url={url}
        ></FeedHeadline>
      )
    })

    return posts;
  }

  return (
    <Layout pageTitle="Outsider">
      <section>
        <Category></Category>
      </section>

      <section className="mt-5">
        <div className='px-5'>
          <p className="text-lg font-bold">Top Headlines</p>
          <div className="mt-4">
            {renderKV()}
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className='px-5'>
          <span className="block border-b border-grey-primary"></span>
        </div>
      </section>

      <section className="mt-6">
        <div className='px-5'>
          <div className="grid grid-cols-1 gap-y-6">
            {renderFollowingHeadlines()}
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className='px-5'>
          <span className="block border-b border-grey-primary"></span>
        </div>
      </section>

      <section className="mt-10">
        <div className='px-5'>
          <p className="text-lg font-bold">Featuring Headlines</p>
          <div className="grid grid-cols-1 gap-y-4 mt-6">
            {renderFeaturingHeadlines()}
          </div>

        </div>
      </section>
    </Layout>
  )
}

// export async function getStaticProps() {
export async function getServerSideProps() {
  try {
    // can't mix sources param with the country or category params.
    const queries = {
      country: "us",
      category: "",
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
    console.log(`error`, error)
  }

}

export default Home
