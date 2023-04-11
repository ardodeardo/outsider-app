import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

interface cardHeadline {
  media: string;
  image: string;
  title: string;
  url: string;
}

function CardHeadline(props: cardHeadline) {

  const { media, image, title, url } = props;

  return (
    <Link href={url}>
      <div className='w-full'>
        <label htmlFor={media} className="text-sm font-bold text-blue-primary">{media}</label>
        <h1 className='text__3x-large mt-2 hover:underline underline-offset-2'>{title}</h1>
        <div className="aspect-w-4 aspect-h-3 mt-2">
          <Image
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