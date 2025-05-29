import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import styles from './GallerySection.module.scss'

const images = [
  {
    src: "/gallery1.jpg",
    description: {
      location: "New York City",
      date: "May 25, 2025",
      event: "Midnight Drive",
      caption: "An electrifying night in the heart of NYC."
    }
  },
  {
    src: "/gallery2.jpg",
    description: {
      location: "Los Angeles",
      date: "April 15, 2025",
      event: "Sunset Mirage",
      caption: "A mesmerizing sunset performance."
    }
  },
  {
    src: "/gallery3.jpg",
    description: {
      location: "Tokyo",
      date: "March 10, 2025",
      event: "Rewired Dreams",
      caption: "A futuristic journey through sound."
    }
  },
  {
    src: "/gallery4.jpg",
    description: {
      location: "Berlin",
      date: "February 20, 2025",
      event: "Voltage Live Mix",
      caption: "Techno beats electrify the crowd."
    }
  },
  {
    src: "/gallery5.jpg",
    description: {
      location: "Ibiza",
      date: "January 5, 2025",
      event: "Melodic House Vibes",
      caption: "A soulful house experience."
    }
  },
  {
    src: "/gallery6.jpg",
    description: {
      location: "London",
      date: "December 15, 2024",
      event: "Techno Energy",
      caption: "High-energy beats in the UK capital."
    }
  }
]

const TIMER_DURATION = 12000; // 12 seconds per slide (increased from 6 seconds)
const FADE_DURATION = 1000; // 1 second fade

export default function GallerySection() {
  const [photoIdx, setPhotoIdx] = useState(0)
  const [entranceDone, setEntranceDone] = useState(false)
  const [canLoadImage, setCanLoadImage] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentScale, setCurrentScale] = useState(1)
  const [currentImageOpacity, setCurrentImageOpacity] = useState(0.15) // Always start with some opacity
  const [nextPhotoIdx, setNextPhotoIdx] = useState(1)
  const [showNextImage, setShowNextImage] = useState(false)
  const [nextImageOpacity, setNextImageOpacity] = useState(0)
  const [isCurrentImageLoaded, setIsCurrentImageLoaded] = useState(false)
  const [isNextImageLoaded, setIsNextImageLoaded] = useState(false)
  const [showOverlay, setShowOverlay] = useState(Array(images.length).fill(true));
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(0)
  const hasTriggeredNext = useRef<boolean>(false)
  const nextImageInheritedOpacity = useRef<number>(0) // Store for NEXT image
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  // Preload all images at mount (and keep references to avoid GC)
  const preloadedImages = useRef<HTMLImageElement[]>([])
  useEffect(() => {
    preloadedImages.current = images.map(imgObj => {
      const img = new window.Image()
      img.src = imgObj.src
      return img
    })
  }, [])

  // Overlay timer for each image
  useEffect(() => {
    const timers = images.map((_, idx) =>
      setTimeout(() => {
        setShowOverlay(prev => {
          const copy = [...prev];
          copy[idx] = false;
          return copy;
        });
      }, 800)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleImageLoad = (idx: number) => {
    setTimeout(() => {
      setShowOverlay(prev => {
        const copy = [...prev];
        copy[idx] = false;
        return copy;
      });
    }, 800);
  };

  // Simplified navigation
  const goToSlide = (idx: number) => {
    if (idx === photoIdx) return
    setPhotoIdx(idx)
    setNextPhotoIdx((idx + 1) % images.length)
    setProgress(0)
    setCurrentScale(1)
    setCurrentImageOpacity(1) // Manually selected images start at 100%
    setShowNextImage(false)
    setNextImageOpacity(0)
    setIsCurrentImageLoaded(false)
    setIsNextImageLoaded(false)
    hasTriggeredNext.current = false
    nextImageInheritedOpacity.current = 0
  }

  // Timer with proper opacity inheritance
  useEffect(() => {
    setProgress(0)
    setCurrentScale(1)
    setNextImageOpacity(0) // Always start next image at 0%
    setIsNextImageLoaded(false)
    hasTriggeredNext.current = false
    const nextIdx = (photoIdx + 1) % images.length
    setNextPhotoIdx(nextIdx)
    
    // Current image starts from its inherited opacity
    const startOpacity = photoIdx === 0 ? 0.15 : 1.0
    setCurrentImageOpacity(startOpacity)
    
    if (timerRef.current) clearInterval(timerRef.current)
    
    startTimeRef.current = Date.now()
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current
      const newProgress = Math.min(elapsed / TIMER_DURATION, 1)
      const newScale = 1 + 0.15 * newProgress
      
      setProgress(newProgress)
      setCurrentScale(newScale)
      
      // Current image opacity progression - only for first image or if not at 100%
      if (photoIdx === 0 && newProgress <= 0.5) {
        // First image: 15% to 100% over 0% to 50%
        const currentOpacity = 0.15 + 0.85 * (newProgress / 0.5)
        setCurrentImageOpacity(currentOpacity)
      } else if (photoIdx === 0 && newProgress > 0.5) {
        // First image: stays at 100% after 50%
        setCurrentImageOpacity(1)
      }
      // All other images already start at 100% and stay there
      
      // Start next image fade-in at 75% progress
      if (newProgress >= 0.75 && !hasTriggeredNext.current) {
        hasTriggeredNext.current = true
      }
      
      // Next image opacity: stays at 0% until 75%, then goes from 0% to 0.6 during 75%-100% period
      if (newProgress >= 0.75 && hasTriggeredNext.current) {
        const progressInTransition = (newProgress - 0.75) / 0.25 // 0 to 1 over 25% period
        setNextImageOpacity(progressInTransition * 0.6) // 0 to 0.6 max
        
        // When transition completes (at 100%), next image should be at 0.6 opacity
        nextImageInheritedOpacity.current = progressInTransition * 0.6
      }
      
      if (elapsed >= TIMER_DURATION) {
        clearInterval(timerRef.current!)
        setPhotoIdx(nextIdx)
      }
    }, 16)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [photoIdx]) // Remove currentImageOpacity dependency to prevent loops

  return (
    <section className={styles.gallery} id="gallery" ref={sectionRef}>
      <motion.div
        className={styles.sliderWrapper}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        onAnimationComplete={() => {
          setEntranceDone(true);
          setTimeout(() => setCanLoadImage(true), 100);
        }}
      >
        <motion.div 
          className={styles.sliderImageCell}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Current image - always zIndex 1 (bottom layer) */}
          <div style={{position: 'relative', width: '100%', height: '100%'}}>
            {canLoadImage && (
              <>
                <motion.img
                  key={`current-${images[photoIdx].src}`}
                  src={images[photoIdx].src}
                  alt={images[photoIdx].description.caption}
                  className={styles.fadeImage}
                  initial={{ opacity: photoIdx === 0 ? 0.15 : 1, scale: 1 }} // Start at correct opacity
                  animate={{ 
                    opacity: isCurrentImageLoaded ? currentImageOpacity : 0,
                    scale: currentScale,
                  }}
                  transition={{
                    opacity: { duration: 0, ease: "linear" }, // Instant opacity changes
                    scale: { duration: 0, ease: "linear" }
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '14px',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    zIndex: 1 // Always bottom layer
                  }}
                  onLoad={() => { setIsCurrentImageLoaded(true); handleImageLoad(photoIdx); }}
                  draggable={false}
                />
                <div
                  className={styles.overlay + (showOverlay[photoIdx] ? ' ' + styles.overlayVisible : ' ' + styles.overlayHidden)}
                  style={{
                    borderRadius: '14px',
                    transition: 'opacity 3.5s cubic-bezier(0.4,0,0.2,1)'
                  }}
                >
                  <div className={styles.spinner}></div>
                </div>
              </>
            )}
          </div>

          {/* Next image - ALWAYS loaded at 0% opacity from time 0s */}
          <motion.img
            key={`next-${images[nextPhotoIdx].src}`}
            src={images[nextPhotoIdx].src}
            alt={images[nextPhotoIdx].description.caption}
            className={styles.fadeImage}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ 
              opacity: isNextImageLoaded ? nextImageOpacity : 0, // Always controlled by state
              scale: 1,
            }}
            transition={{
              opacity: { duration: 0, ease: "linear" }, // Instant opacity changes
              scale: { duration: 0, ease: "linear" }
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '14px',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 2 // Always on top
            }}
            onLoad={() => setIsNextImageLoaded(true)}
            draggable={false}
          />

          {/* Description with staggered animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`desc-${photoIdx}`}
              className={styles.imgDescription}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                y: isInView ? 0 : 30,
              }}
              exit={{ 
                opacity: 0, 
                y: -20,
                transition: { duration: 0.3, ease: "easeIn" }
              }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <p className={styles.location}>
                <span className={styles.label}>Location:</span>
                <span className={styles.value}>{images[photoIdx].description.location}</span>
              </p>
              <p className={styles.date}>
                <span className={styles.label}>Date:</span>
                <span className={styles.value}>{images[photoIdx].description.date}</span>
              </p>
              <p className={styles.event}>
                <span className={styles.label}>Event:</span>
                <span className={styles.value}>{images[photoIdx].description.event}</span>
              </p>
              <p className={styles.caption}>
                <span className={styles.label}>Caption:</span>
                <span className={styles.value}>{images[photoIdx].description.caption}</span>
              </p>
              
              {/* Timeline inside description container - use direct style control */}
              <div className={styles.timelineBar}>
                <div
                  className={styles.timelineProgress}
                  style={{ width: `${progress * 100}%` }} // Direct style control
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots with staggered animation */}
          <motion.div 
            className={styles.slideDots}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            {images.map((_, idx) => (
              <motion.span
                key={idx}
                className={photoIdx === idx ? styles.activeDot : styles.dot}
                onClick={() => goToSlide(idx)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.7 + (idx * 0.05), ease: "easeOut" }}
              >
                {photoIdx === idx && (
                  <span
                    className={styles.progress}
                    style={{ width: `${progress * 100}%` }}
                  />
                )}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}