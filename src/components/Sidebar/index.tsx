import React from 'react'
import Link from 'next/link';

import { BsXLg } from "react-icons/bs";
import SearchBox from '../SearchBox';
import { CONTENT } from '@/constants/content';
import { useContainer } from '@/hooks/context';

function SideBar() {
  const categories: Array<string> = CONTENT.categories;

  const { dispatchSidebar } = useContainer();

  return (
    <nav className="sidebar__container">
      <div className='p-5'>
        <section>
          <div className='flex justify-end'>
            <button className='text-2xl' onClick={() => dispatchSidebar()}>
              <BsXLg></BsXLg>
            </button>
          </div>
        </section>
        <section>
          <SearchBox></SearchBox>
        </section>
        <section className='mt-10'>
          <ul className='flex flex-col gap-y-7'>
            {
              categories.map(item => {
                return <li key={item} className="text-xl font-bold tracking-widest uppercase hover:underline underline-offset-8 dark:text-white-secondary">
                  <Link href={`/category/${item.toLocaleLowerCase()}`} onClick={() => setTimeout(() => dispatchSidebar(), 500)}>{item}</Link>
                </li>
              })
            }
          </ul>
        </section>
      </div>
    </nav>
  )
}

export default SideBar