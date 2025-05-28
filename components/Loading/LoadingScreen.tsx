import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './LoadingScreen.module.scss'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Initializing...')
  const [currentSection, setCurrentSection] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  // All assets to preload from different sections
  const allAssets = {
    gallery: [
      '/gallery1.jpg',
      '/gallery2.jpg', 
      '/gallery3.jpg',
      '/gallery4.jpg',
      '/gallery5.jpg',
      '/gallery6.jpg'
    ],
    skills: [
      // Add any skill section images if you have them
      // Skills section doesn't seem to have images based on the SCSS
    ],
    hero: [
      // Add hero section images
      // '/hero-bg.jpg',
      // '/profile.jpg',
    ],
    about: [
      // Add about section images
      // '/about-image.jpg',
    ],
    contact: [
      // Add contact section images/icons
      // '/icons/email.svg',
      // '/icons/phone.svg',
    ],
    fonts: [
      // Add custom fonts if any - check your CSS for @font-face or font imports
      // '/fonts/custom-font.woff2',
    ],
    audio: [
      // Add audio files if any
      // '/audio/background.mp3',
    ]
  }

  // Flatten all assets
  const flatAssets = Object.values(allAssets).flat()
  const totalAssets = flatAssets.length

  useEffect(() => {
    let loadedCount = 0
    const minLoadTime = 3000 // Minimum 3 seconds
    const startTime = Date.now()

    const updateProgress = (assetUrl: string, section: string) => {
      loadedCount++
      const assetProgress = (loadedCount / totalAssets) * 100
      
      setProgress(assetProgress)
      setCurrentSection(section)

      // Update loading text based on which section is loading
      if (section === 'gallery') {
        setLoadingText('Loading gallery images...')
      } else if (section === 'skills') {
        setLoadingText('Preparing skills section...')
      } else if (section === 'hero') {
        setLoadingText('Loading hero content...')
      } else if (section === 'about') {
        setLoadingText('Loading about section...')
      } else if (section === 'contact') {
        setLoadingText('Preparing contact info...')
      } else if (section === 'fonts') {
        setLoadingText('Loading fonts...')
      } else if (section === 'audio') {
        setLoadingText('Loading audio assets...')
      }

      // Final stage
      if (assetProgress > 90) {
        setLoadingText('Finalizing experience...')
      }

      // Check if all assets loaded and minimum time passed
      if (loadedCount === totalAssets) {
        const elapsedTime = Date.now() - startTime
        const remainingTime = Math.max(0, minLoadTime - elapsedTime)
        
        setTimeout(() => {
          setProgress(100)
          setLoadingText('Experience ready!')
          setTimeout(() => {
            setIsComplete(true)
            setTimeout(() => {
              onLoadingComplete()
            }, 800)
          }, 300)
        }, remainingTime)
      }
    }

    // Function to preload assets by section
    const preloadSection = (sectionName: string, assets: string[]) => {
      return assets.map(src => {
        return new Promise<void>((resolve) => {
          if (src.includes('.jpg') || src.includes('.png') || src.includes('.webp') || src.includes('.svg')) {
            // Images
            const img = new Image()
            img.onload = () => {
              updateProgress(src, sectionName)
              resolve()
            }
            img.onerror = () => {
              console.warn(`Failed to load image: ${src}`)
              updateProgress(src, sectionName)
              resolve()
            }
            img.src = src
          } else if (src.includes('.mp3') || src.includes('.wav')) {
            // Audio files
            const audio = new Audio()
            audio.oncanplaythrough = () => {
              updateProgress(src, sectionName)
              resolve()
            }
            audio.onerror = () => {
              console.warn(`Failed to load audio: ${src}`)
              updateProgress(src, sectionName)
              resolve()
            }
            audio.src = src
          } else if (src.includes('.woff') || src.includes('.woff2')) {
            // Fonts
            const link = document.createElement('link')
            link.rel = 'preload'
            link.as = 'font'
            link.type = 'font/woff2'
            link.crossOrigin = 'anonymous'
            link.href = src
            link.onload = () => {
              updateProgress(src, sectionName)
              resolve()
            }
            link.onerror = () => {
              console.warn(`Failed to load font: ${src}`)
              updateProgress(src, sectionName)
              resolve()
            }
            document.head.appendChild(link)
          } else {
            // Other assets
            updateProgress(src, sectionName)
            resolve()
          }
        })
      })
    }

    // Start preloading all sections
    const allPromises = Object.entries(allAssets).flatMap(([sectionName, assets]) => 
      preloadSection(sectionName, assets)
    )

    // If no assets to load, still enforce minimum time
    if (totalAssets === 0) {
      setTimeout(() => {
        setProgress(100)
        setLoadingText('Experience ready!')
        setTimeout(() => {
          setIsComplete(true)
          setTimeout(onLoadingComplete, 800)
        }, 300)
      }, minLoadTime)
    }

    Promise.all(allPromises)

  }, [onLoadingComplete, totalAssets])

  return (
    <AnimatePresence>
      <motion.div
        className={styles.loadingScreen}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className={styles.content}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Preparing Experience
          </motion.h1>
          
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <motion.div
                className={styles.progressFill}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            
            <motion.p
              className={styles.progressText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              key={loadingText} // Re-animate on text change
            >
              {loadingText}
            </motion.p>

            <motion.p
              className={styles.percentageText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {Math.round(progress)}%
            </motion.p>
          </div>

          {/* Show current section being loaded */}
          {currentSection && (
            <motion.p
              className={styles.sectionText}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              key={currentSection}
            >
              Processing: {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
            </motion.p>
          )}

          {isComplete && (
            <motion.div
              className={styles.completeContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.checkmark}>✓</div>
              <p className={styles.completeText}>
                All components loaded and cached
              </p>
              <p className={styles.launchText}>
                Launching your experience...
              </p>
            </motion.div>
          )}
        </div>

        {/* Background animation */}
        <div className={styles.backgroundAnimation}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              initial={{ opacity: 0.3, scale: 0 }}
              animate={{ 
                opacity: [0.3, 0.7, 0.3],
                scale: [0, 1, 0],
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
