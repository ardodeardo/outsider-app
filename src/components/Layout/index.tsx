import React, { useState, Suspense } from 'react'

import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SideBar = dynamic(() => import('@/components/Sidebar'), { suspense: true });

import dynamic from 'next/dynamic';

interface layout {
  pageTitle: string;
  children: React.ReactNode;
}

function Layout(props: layout) {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);
  const { pageTitle, children } = props;

  const handleSidebar = () => {
    setSidebarActive(!sidebarActive);
  }

  return (
    <>
      <Head>
        <title>{pageTitle.toUpperCase()}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* google font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <Header toggleSidebar={handleSidebar}></Header>

      <main className='relative'>
        {
          sidebarActive &&
          <Suspense fallback={<></>}>
            <SideBar toggleSidebar={handleSidebar}></SideBar>
          </Suspense>
        }

        {children}
      </main>

      <Footer></Footer>
    </>
  )
}

export default Layout