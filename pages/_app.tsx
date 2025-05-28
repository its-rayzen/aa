import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '../components/Layout/Layout'
import LoadingScreen from '../components/Loading/LoadingScreen'
import { AnimatePresence, motion } from 'framer-motion'
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasVisited, setHasVisited] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user has already visited (stored in sessionStorage)
    const visited = sessionStorage.getItem('hasVisited')
    if (visited) {
      setHasVisited(true)
      setIsLoading(false)
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    sessionStorage.setItem('hasVisited', 'true')
  }

  // Show loading screen only on first visit
  if (isLoading && !hasVisited) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }} // Reduced from 0.3 for faster transitions
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}