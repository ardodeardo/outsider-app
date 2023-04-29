import React, { Suspense } from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Lato } from "next/font/google";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useContainer } from '@/hooks/context';

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

const SideBar = dynamic(() => import('@/components/Sidebar'), { suspense: true });
const LimitApi = dynamic(() => import('@/components/Limit/limit.api'), { suspense: true });

interface Layout {
  pageTitle: string;
  apiStatusCode?: string;
  children: React.ReactNode;
}

function Layout(props: Layout) {
  const { pageTitle, apiStatusCode, children } = props;

  const { state } = useContainer();

  return (
    <div className={lato.className}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <Header></Header>

      <main className='relative bg-white dark:bg-black'>
        {
          state.sidebarActive &&
          <Suspense fallback={<></>}>
            <SideBar></SideBar>
          </Suspense>
        }

        {
          apiStatusCode === "rateLimited" ? <LimitApi></LimitApi> : children
        }
      </main>

      <Footer></Footer>
    </div >
  )
}

export default Layout