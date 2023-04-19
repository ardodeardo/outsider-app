import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes';
import Link from 'next/link';

import { useContainer } from '@/hooks/context';
import { BiMoon, BiSun } from "react-icons/bi";

export default function Header() {

  const { theme, setTheme, systemTheme } = useTheme();
  const [didMount, setDidMount] = useState<boolean>(false);
  const { dispatchSidebar } = useContainer();

  useEffect(() => {
    setDidMount(true);
  }, [])

  const toggleTheme = () => {
    const swappedTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(swappedTheme);
  }

  const Hamburger: React.FC = () => {
    return (
      <>
        <span className='block border-b-2 border-b-black dark:border-b-white w-5'></span>
        <span className='block border-b-2 border-b-black dark:border-b-white w-5'></span>
        <span className='block border-b-2 border-b-black dark:border-b-white w-5'></span>
      </>
    )
  }

  return (
    <header className='bg-white dark:bg-black border-b border-grey-thin dark:border-grey-thin sticky top-0 z-40'>
      <div className='flex justify-between p-5'>

        <div className='flex flex-col justify-center gap-y-1 hover:cursor-pointer' onClick={() => dispatchSidebar()}>
          <Hamburger></Hamburger>
        </div>

        <div className='font-bold text-2xl tracking-widest'>
          <Link href="/">OUTSIDER</Link>
        </div>

        <button className='flex items-center text-2xl w-6' onClick={() => toggleTheme()}>
          {didMount && (
            theme === 'dark' ? <BiSun className='text-yellow-sunny'></BiSun> : <BiMoon></BiMoon>
          )}
        </button>
      </div>
    </header >
  )
}
