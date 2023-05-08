import React from 'react'
import Link from 'next/link';

interface Button {
  type?: string | undefined;
  size?: string;
  children: React.ReactNode;
  hrefTo?: string;
  action?: any;
}

function Button(props: Button) {
  const { type, size, children, hrefTo, action } = props;

  const setStyle = (type: string | undefined) => {
    let buttonType: string = "";

    switch (type) {
      case 'primary':
        buttonType = "py-2 px-5 text-white dark:text-white-secondary bg-blue-primary rounded-3xl text-base";
        break;

      default:
        buttonType = "py-2 px-5 text-white dark:text-white-secondary bg-blue-primary rounded-3xl text-base";
        break;
    }

    return buttonType;
  }

  const render = () => {
    return (
      hrefTo && hrefTo.length > 0 ?
        <Link href={hrefTo}>
          <button className={setStyle(type)}>{props.children}</button>
        </Link>
        :
        <button className={setStyle(type)} onClick={ () => action() }>{props.children}</button>
    )
  }

  return (
    <>
      {render()}
    </>
  )
}

export default Button