import Layout from '@/components/Layout';

import Category from '@/components/Category';
import SearchBox from '@/components/SearchBox';
import CardHeadline from '@/components/Card/card.headline';
import CardCompact from '@/components/Card/card.compact';
import CardSearch from '@/components/Card/card.search';
import FeedHeadline from '@/components/Feed/feed.headline';
import Button from '@/components/Button';

import { PATH } from '@/constants/path';

export default function UiKit() {
  return (
    <Layout pageTitle='outsider - ui components'>

      <section>
        <Category></Category>
      </section>

      <section className='mt-6'>
        <div className='px-5'>
          <SearchBox></SearchBox>
        </div>
      </section>

      <section className='mt-6'>
        <div className='px-5'>
          <CardHeadline
            media="Bloomberg"
            image="/images/svb4x3.jpg"
            title="Silicon Valley Bank Collapse Threatens VC Industry With $500B Markdown"
            url={PATH.defaultCta}
          />
        </div>
      </section>

      <section className='mt-6'>
        <div className='px-5'>
          <CardCompact
            media="Reuters"
            image="/images/bigtech4x3.jpg"
            title="Big Tech is making its stuff slower and stupider — on purpose"
            description={`Google, Amazon, and Meta are making their core products worse — on purpose. The user's experience has become subordinate`}
            url={PATH.defaultCta}
          ></CardCompact>
        </div>
      </section>

      <section className='mt-6'>
        <div className='px-5'>
          <CardSearch
            media="Reuters"
            image="/images/tiktok4x3.jpg"
            title="Why TikTok is taking months to delete personal US user data from servers outside its Project Texas firewalls, even as its political standing sours"
            date="Feb 26, 2023, 16.32 PM"
            url={PATH.defaultCta}
          ></CardSearch>
        </div>
      </section>

      <section className='mt-6'>
        <div className='px-5'>
          <FeedHeadline
            media="Axios"
            title="Top Fed official: Silicon Valley Bank mismanagement led to failure"
            url={PATH.defaultCta}
          ></FeedHeadline>
        </div>
      </section>

      <section className='mt-6'>
        <div className='px-5'>
          <Button type="primary" size="md" action={() => console.log('button clicked')}>Primary Button</Button>
        </div>
      </section>

    </Layout>
  )
}
