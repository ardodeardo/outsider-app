import React from 'react'
import Link from 'next/link';

import { CONTENT } from '@/constants/content';

function Category() {
  const categories: Array<string> = CONTENT.categories;

  return (
    <div className="mt-5">
      <ul className="category__scrollbar-visual--hidden w-full overflow-x-auto flex gap-x-3 px-5">
        {
          categories.map(category => {
            return (
              <li className='text-base dark:text-white-secondary' key={category}>
                <Link href={`/category/${category.toLocaleLowerCase()}`}>{category}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Category