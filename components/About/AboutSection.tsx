import styles from './AboutSection.module.scss'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.content}>
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.left}
        >
          <div className={styles.imgGlow}>
            <img src="/avatar.jpg" alt="RAYZEN Portrait" />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.right}
        >
          <blockquote className={styles.quote}>
            “This isn’t just music — it’s a livewire moment, every time.”
          </blockquote>
          <p className={styles.bio}>
            RAYZEN is a rising DJ with a sound forged in movement, emotion, and energy. Not defined by genre, but by momentum, RAYZEN builds sonic experiences that make people move — physically and emotionally. With a deep sense for crowd control, harmonic mixing, and creative editing, RAYZEN stands at the intersection of skill, taste, and presence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}