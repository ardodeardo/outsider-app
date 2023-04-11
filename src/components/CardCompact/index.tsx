import React from 'react'

import Image from 'next/image'
import Link from 'next/link';

interface cardCompact {
  media: string;
  image: string;
  title: string;
  description: string;
  date?: string;
  url: string;
}

function CardCompact(props: cardCompact) {

  const { media, image, title, description, date, url } = props;

  return (
    <Link href={url}>
      <div className='w-full'>
        <label htmlFor={media} className="text-sm font-bold text-blue-primary">{media}</label>
        <div className='grid grid-cols-8 gap-x-2 mt-2'>
          <div className='col-span-5'>
            <h2 className='text__large hover:underline underline-offset-2'>{title}</h2>
          </div>
          <div className='col-span-3'>
            <div className='aspect-w-4 aspect-h-3'>
              <Image
                src="/images/bigtech4x3.jpg"
                alt={title}
                className="w-full h-full object-center object-cover"
                width={140}
                height={105} />
            </div>
          </div>
        </div>
        <div className='mt-2'>
          <p className='text__small hover:underline underline-offset-2'>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default CardCompact