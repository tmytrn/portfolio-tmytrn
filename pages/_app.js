import '../styles/global.css'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
      <Component {...pageProps} />
      <Analytics />
    </AnimatePresence>
  )
}

