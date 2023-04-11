import Layout from "@/components/Layout";

import Category from "@/components/Category";
import CardHeadline from "@/components/CardHeadline";
import CardCompact from "@/components/CardCompact";
import FeedHeadline from "@/components/FeedHeadline";

export default function Home() {
  return (
    <Layout pageTitle="outsider">
      <section>
        <Category></Category>
      </section>

      <section className="mt-5">
        <div className='px-5'>
          <p className="text-lg font-bold">Top Headlines</p>
          <div className="mt-4">
            <CardHeadline
              media="Bloomberg"
              image="/images/svb4x3.jpg"
              title="Silicon Valley Bank Collapse Threatens VC Industry With $500B Markdown"
              url="https://www.figma.com/@ardodeardo"
            />
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
            <CardCompact
              media="Reuters"
              image=""
              title="Big Tech is making its stuff slower and stupider — on purpose"
              description={`Google, Amazon, and Meta are making their core products worse — on purpose. The user's experience has become subordinate`}
              url="https://www.figma.com/@ardodeardo"
            ></CardCompact>
            <CardCompact
              media="Reuters"
              image=""
              title="Big Tech is making its stuff slower and stupider — on purpose"
              description={`Google, Amazon, and Meta are making their core products worse — on purpose. The user's experience has become subordinate`}
              url="https://www.figma.com/@ardodeardo"
            ></CardCompact>
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
            <FeedHeadline
              media="Axios"
              title="Top Fed official: Silicon Valley Bank mismanagement led to failure"
              url="https://www.figma.com/@ardodeardo"
            ></FeedHeadline>
            <FeedHeadline
              media="Axios"
              title="Top Fed official: Silicon Valley Bank mismanagement led to failure"
              url="https://www.figma.com/@ardodeardo"
            ></FeedHeadline>
          </div>

        </div>
      </section>
    </Layout>
  )
}
