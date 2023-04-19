import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes'
import AppContext from '@/hooks/context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
    </ThemeProvider>
  )
}
