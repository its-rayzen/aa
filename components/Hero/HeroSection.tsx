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
      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.0 }}
      >
        "Feel the beat, let your heart beat"
      </motion.p>
      <div className={styles.buttons}>
        <motion.a
          href="#listen"
          className={styles.glowBtn}
          whileHover={{ scale: 1.07, boxShadow: "0 0 16px #fff" }}
        >
        Listen to Mixes
        </motion.a>
        <motion.a
          href="#booking"
          className={styles.glowBtn}
          whileHover={{ scale: 1.07, boxShadow: "0 0 16px #fff" }}
        >
        Book RAYZEN
        </motion.a>
      </div>
      <motion.div
        className={styles.scrollCue}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 12 }}
        transition={{ delay: 1.3, duration: 1.0, repeat: Infinity, repeatType: 'reverse' }}
      >
        <span className={styles.arrow}>&#8595;</span>
      </motion.div>
    </section>
  )
}