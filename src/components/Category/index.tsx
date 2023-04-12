import React from 'react'
import Link from 'next/link';

import { CONTENT } from '@/constants';

function Category() {
  const categories: Array<string> = CONTENT.categories;

  return (
    <div className="mt-5">
      <ul className="w-full overflow-x-auto flex gap-x-3 px-5">
        {
          categories.map(category => {
            return (
              <li className='text-base' key={category}>
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