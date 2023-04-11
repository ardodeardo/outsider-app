import React from 'react'
import Router, { useRouter } from 'next/router'

import Layout from '@/components/Layout';
import CardCompact from '@/components/CardCompact';

function Category() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Layout pageTitle={`outsider - ${name}`}>

      <section className='mt-10'>
        <div className='px-5'>
          <h1 className='text-2xl text-blue-primary tracking-widest font-bold uppercase'>{name}</h1>
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
    </Layout>

  )
}

export default Category