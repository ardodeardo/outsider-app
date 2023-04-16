import React from 'react'
import Link from 'next/link';

export default function Footer() {

  interface FooterLink {
    label: string;
    url: string;
  }

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
                return <li key={item.label} className="hover:underline underline-offset-4">
                  <Link href={item.url}>
                    {item.label}
                  </Link>
                </li>
              })
            }
          </ul>
          <div className='mx-auto'>
            <p>Powered By</p>
            <Link href="https://newsapi.org/" aria-label='News Api'>
              <img src="/images/newsapi.png" alt="News Api" className='h-7 mt-2' />
            </Link>
          </div>
          <p>© 2023 Outsider. Inspired by Insider</p>
        </div>
      </div>
    </footer>
  )
}
