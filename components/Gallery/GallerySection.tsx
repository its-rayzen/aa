
import styles from './GallerySection.module.scss'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
  '/gallery6.jpg',
]

const GallerySection = () => {
  const [current, setCurrent] = useState(0)

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }
  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <AnimatePresence>
      <motion.section
        className={styles.gallerySection}
        key="gallery-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className={styles.sliderWrapper}>
          <motion.img
            key={current}
            src={images[current]}
            alt={`Gallery image ${current + 1}`}
            className={styles.sliderImage}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className={styles.sliderDots}>
          {images.map((_, idx) => (
            <span
              key={idx}
              className={idx === current ? styles.activeDot : styles.dot}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
        <h3 className={styles.gridTitle}>Find more</h3>
        <motion.div
          className={styles.galleryGrid}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
          }}
        >
          {images.map((src, idx) => (
            <motion.img
              key={idx}
              src={src}
              alt={`Gallery image ${idx + 1}`}
              className={styles.galleryImage}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
            />
          ))}
        </motion.div>
      </motion.section>
    </AnimatePresence>
  )
}

export default GallerySection
