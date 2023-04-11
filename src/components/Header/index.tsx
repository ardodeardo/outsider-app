import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { BiMoon, BiSun } from "react-icons/bi";

interface header {
  toggleSidebar: any
}

export default function Header(props: header) {
  const { theme, setTheme, systemTheme } = useTheme();
  const { toggleSidebar } = props;

  const toggleTheme = () => {
    const swappedTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(swappedTheme);
  }

  return (
    <header className='bg-white dark:bg-black border-b border-grey-thin dark:border-grey-thin sticky top-0 z-40'>
      <div className='flex justify-between p-5'>

        <div className='flex flex-col justify-center gap-y-1 hover:cursor-pointer' onClick={() => toggleSidebar()}>
          <span className='block border-b border-b-black dark:border-b-white w-5'></span>
          <span className='block border-b border-b-black dark:border-b-white w-5'></span>
          <span className='block border-b border-b-black dark:border-b-white w-5'></span>
        </div>

        <div className='font-bold text-xl tracking-widest'>
          <Link href="/">OUTSIDER</Link>
        </div>

        <button className='flex items-center text-2xl' onClick={() => toggleTheme()}>
          { theme === 'dark' ? <BiSun className='text-yellow-sunny'></BiSun> : <BiMoon></BiMoon> }
        </button>
      </div>
    </header >
  )
}
