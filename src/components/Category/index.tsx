import React from 'react'
import Link from 'next/link';

function Category() {
  const categories: Array<string> = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

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