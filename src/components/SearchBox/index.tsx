import React, { useState, useEffect } from 'react'

import { HiMagnifyingGlass } from "react-icons/hi2";

interface searchBox {
  defaultKeyword?: string | string[];
}

function SearchBox(props: searchBox) {
  const [keyword, setKeyword] = useState<string>("");
  const { defaultKeyword } = props;

  useEffect(() => {
    if (defaultKeyword && defaultKeyword.length > 0) {
      setKeyword(String(defaultKeyword));
    }
  }, [defaultKeyword])
  
  const handleSearch = (e: any) => {
    const q: string = e.target.value;

    setKeyword(q);
  }

  return (
    <div className='relative w-full mt-10'>
      <form action={`/search`} method="get">
        <input type="text" name="q" className='w-full p-3 pr-10 dark:bg-black border border-grey dark:border-blue-secondary rounded-lg text-base' placeholder='Search news..' value={keyword} maxLength={100} onChange={(e) => handleSearch(e)} />
        <button type='submit' className='block absolute top-1/2 transform -translate-y-1/2 right-3 z-10 w-5 h-5 text-xl'>
          <HiMagnifyingGlass></HiMagnifyingGlass>
        </button>
      </form>
    </div>
  )
}

export default SearchBox