import styles from './HeroSection.module.scss'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <motion.h1
        className={styles.logo}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: 'easeOut' }}
      >
        RAYZEN
      </motion.h1>
    </section>
  )
}