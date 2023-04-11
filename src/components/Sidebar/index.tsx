import React from 'react'
import Link from 'next/link';

import { BsXLg } from "react-icons/bs";
import SearchBox from '../SearchBox';

interface sidebar {
  toggleSidebar: any
}

function SideBar(props: sidebar) {

  const categories: Array<string> = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

  const { toggleSidebar } = props;

  return (
    <nav className="sidebar__container">
      <div className='p-5'>
        <section>
          <div className='flex justify-end'>
            <button className='text-2xl' onClick={() => toggleSidebar()}>
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
                return <li key={item} className="text-xl font-bold tracking-widest uppercase hover:underline underline-offset-8">
                  <Link href={`/${item.toLocaleLowerCase()}`}>{item}</Link>
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