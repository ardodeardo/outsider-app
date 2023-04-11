import Link from 'next/link';
import React from 'react'

interface feedHeadline {
  media: string;
  title: string;
  url: string;
}

function FeedHeadline(props: feedHeadline) {
  const { media, title, url } = props;

  return (
    <Link href={url} className="border-b border-grey-thin last:border-none pb-4">
      <div className='w-full'>
        <label htmlFor={media} className="text-sm font-bold text-blue-primary">{media}</label>
        <h3 className='text__large mt-1 hover:underline underline-offset-2'>{title}</h3>
      </div>
    </Link>
  )
}

export default FeedHeadline