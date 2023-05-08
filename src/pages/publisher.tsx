import React from 'react'

import Layout from '@/components/Layout';
import { Sources } from '@/interfaces/api.query';
import GridSources from '@/components/Grid/grid.sources'
import { sources } from '@/api/newsapi';

interface Data {
  status: string;
  code?: string;
  sources: Sources[];
}

interface Publisher {
  data: Data;
}

function Publisher({ data }: Publisher) {
  return (
    <Layout pageTitle="Outsider - Publishers" apiStatusCode={data.code}>
      <div className="mt-8">
        <div className="px-5">
          <h1 className="text-3xl dark:text-white-secondary leading-10 font-bold">
            Publishers</h1>
          <p className="text-base dark:text-white-secondary mt-2">
            Our trusted publishers powered by News API
          </p>
          <div className="mt-8">
            <GridSources data={data.sources}></GridSources>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await sources();

  return {
    props: { data },
    revalidate: 60 * 15
  }
}



export default Publisher