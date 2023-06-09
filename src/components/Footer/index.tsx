import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface FooterLink {
  label: string;
  url: string;
}

export default function Footer() {
  const backLink: Array<FooterLink> = [
    {
      label: "Log In",
      url: "/login"
    },
    {
      label: "About Us",
      url: "/about"
    },
    {
      label: "Publishers",
      url: "/publisher"
    },
    {
      label: "Sitemap",
      url: "/sitemap"
    },
  ]

  return (
    <footer className='mt-20'>
      <div className='px-5'>
        <div className='border-t border-grey-thin'></div>
      </div>
      <div className='py-10 px-6'>
        <div className='flex flex-col justify-center gap-y-6 text-base text-center mx-auto'>
          <ul className='flex mx-auto gap-x-5'>
            {
              backLink.map((item) => {
                return <li key={item.label} className="dark:text-white-secondary hover:underline underline-offset-4">
                  <Link href={item.url}>
                    {item.label}
                  </Link>
                </li>
              })
            }
          </ul>
          <div className='mx-auto'>
            <p className='dark:text-white-secondary'>Powered By</p>
            <Link href="https://newsapi.org/" target='_blank' aria-label='News Api'>
              <Image
                src="/images/newsapi.png"
                alt="News Api"
                width={350}
                height={102}
                className='h-7 w-auto mt-2'
              />
            </Link>
          </div>
          <p className='dark:text-white-secondary'>© 2023 Outsider. Inspired by Insider</p>
        </div>
      </div>
    </footer>
  )
}
