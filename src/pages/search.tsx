import React from 'react'
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import SearchBox from '@/components/SearchBox';
import CardSearch from '@/components/CardSearch';

function Search() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <Layout pageTitle={`outsider - search results`}>
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
            <CardSearch
              media="Reuters"
              image=""
              title="Why TikTok is taking months to delete personal US user data from servers outside its Project Texas firewalls, even as its political standing sours"
              date="Feb 26, 2023, 16.32 PM"
              url="https://www.figma.com/@ardodeardo"
            ></CardSearch>
            <CardSearch
              media="Reuters"
              image=""
              title="Why TikTok is taking months to delete personal US user data from servers outside its Project Texas firewalls, even as its political standing sours"
              date="Feb 26, 2023, 16.32 PM"
              url="https://www.figma.com/@ardodeardo"
            ></CardSearch>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Search