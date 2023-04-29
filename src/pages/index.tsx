import Layout from "@/components/Layout";

import Category from "@/components/Category";
import CardHeadline from "@/components/Card/card.headline";
import CardCompact from "@/components/Card/card.compact";
import FeedHeadline from "@/components/Feed/feed.headline";

import { PATH } from "@/constants/path";
import { Data, Article } from "@/interfaces";
import { filterTitle } from "@/helper";
import { headline } from "@/api/newsapi";
import LimitApi from "@/components/Limit/limit.api";

interface Home {
  data: Data;
}

function Home({ data }: Home) {
  const articleList: Array<Article> = data.articles;

  const renderHero = () => {
    if (articleList && articleList.length > 0) {
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
    } else {
      return (
        <>no post</>
      )
    }
  }

  const renderFollowingHeadlines = () => {
    if (articleList && articleList.length > 0) {
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
    } else {
      return (
        <>no post</>
      )
    }
  }

  const renderFeaturingHeadlines = () => {
    if (articleList && articleList.length > 0) {

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
    } else {
      return (
        <>no post</>
      )
    }
  }

  return (
    <Layout pageTitle="Outsider" apiStatusCode={data.code}>
      <section>
        <Category></Category>
      </section>

      <section className="mt-5">
        <div className='px-5'>
          <p className="text-lg font-bold">Top Headlines</p>
          <div className="mt-4">
            {renderHero()}
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

export async function getServerSideProps() {
  // const data = await headline({country: "us"});
  const data = await fetch('http://localhost:3000/api/newsapi/headline?country=us').then(res => res.json());

  return {
    props: { data },
  }
}

export default Home
