// import React from 'react'

import Layout from '@/components/Layout';

import Category from '@/components/Category';
import SearchBox from '@/components/SearchBox';
import CardHeadline from '@/components/CardHeadline';
import CardCompact from '@/components/CardCompact';
import CardSearch from '@/components/CardSearch';
import FeedHeadline from '@/components/FeedHeadline';
import Button from '@/components/Button';

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
            url="https://www.figma.com/@ardodeardo"
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
            url="https://www.figma.com/@ardodeardo"
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
            url="https://www.figma.com/@ardodeardo"
          ></CardSearch>
        </div>
      </section>

      <section className='mt-6'>
        <div className='px-5'>
          <FeedHeadline
            media="Axios"
            title="Top Fed official: Silicon Valley Bank mismanagement led to failure"
            url="https://www.figma.com/@ardodeardo"
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
