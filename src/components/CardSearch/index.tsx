import React from 'react'
import dayjs from 'dayjs';
import Link from 'next/link';
import ImageWithFallback from '../Image';

interface CardSearch {
  media: string;
  image: string;
  title: string;
  date: string;
  url: string;
}

function CardSearch(props: CardSearch) {
  const { media, image, title, date, url } = props;

  const formatDate = (param: string) => {
    const formatted = dayjs(param).format('MMM DD, YYYY, hh.mm A');

    return formatted;
  }

  return (
    <Link href={url} className="border-b border-grey-thin pb-4 last:border-none">
      <div className='w-full'>
        <div className='grid grid-cols-9 gap-x-3'>
          <div className='col-start-4 col-span-6'>
            <label htmlFor={media} className="text-sm font-bold text-blue-primary dark:text-blue-secondary">{media}</label>
          </div>
        </div>
        <div className='grid grid-cols-9 gap-x-3 mt-2'>
          <div className='col-span-3'>
            <div className='aspect-w-4 aspect-h-3'>
              <ImageWithFallback
                src={image}
                alt={title}
                className="w-full h-full object-center object-cover"
                width={140}
                height={105}
              />
            </div>
          </div>
          <div className='col-span-6'>
            <h2 className='text__normal hover:underline underline-offset-2'>{title}</h2>
            <time dateTime={date} className="block text__small text-grey-darken dark:text-grey-thin  mt-2">{formatDate(date)}</time>
          </div>
        </div>
      </div>
    </Link>

  )
}

export default CardSearch