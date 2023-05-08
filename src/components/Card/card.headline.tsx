import React from 'react'
import Link from 'next/link'

import ImageWithFallback from '../Image';
import { Card } from '@/interfaces/components.card';

function CardHeadline(props: Card) {
  const { media, image, title, url } = props;

  return (
    <Link href={url} target='_blank'>
      <div className='w-full'>
        <label htmlFor={media} className="text-sm font-bold text-blue-primary dark:text-blue-secondary">{media}</label>
        <h1 className=' text__3x-large dark:text-white-secondary mt-2 hover:underline underline-offset-2'>{title}</h1>
        <div className="aspect-w-4 aspect-h-3 mt-2">
          <ImageWithFallback
            src={image}
            alt={title}
            className='w-full h-full object-center object-cover'
            width={320}
            height={240}
            priority
          />
        </div>
      </div>
    </Link>
  )
}

export default CardHeadline