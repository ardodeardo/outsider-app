import React from 'react'
import Link from 'next/link';

import ImageWithFallback from '../Image';
import { CardCompact } from '@/interfaces/components.card';

function CardCompact(props: CardCompact) {

  const { media, image, title, description, date, url } = props;

  return (
    <Link href={url} target='_blank'>
      <div className='w-full'>
        <label htmlFor={media} className="text-sm font-bold text-blue-primary dark:text-blue-secondary">{media}</label>
        <div className='grid grid-cols-8 gap-x-2 mt-2'>
          <div className='col-span-5'>
            <h2 className='text__large dark:text-white-secondary hover:underline underline-offset-2'>{title}</h2>
          </div>
          <div className='col-span-3'>
            <div className='aspect-w-4 aspect-h-3'>
              <ImageWithFallback
                src={image}
                alt={title}
                className="w-full h-full object-center object-cover"
                width={140}
                height={105} />
            </div>
          </div>
        </div>
        {description && <div className='mt-2'>
          <p className='text__small dark:text-white-secondary hover:underline underline-offset-2 line-clamp-3'>{description}</p>
        </div>}
      </div>
    </Link>
  )
}

export default CardCompact