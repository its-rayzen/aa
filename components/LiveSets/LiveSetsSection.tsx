import styles from './LiveSetsSection.module.scss'
import { motion } from 'framer-motion'

const sets = [
  {
    title: "Live at Noir Nights 2024",
    description: "Opening set, peak hour, crowd energy capture.",
    video: "https://www.youtube.com/embed/ScMzIvxBSi4"
  },
  {
    title: "Pulse Room Deep Session",
    description: "Melodic & progressive, full club journey.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Studio Stream: Breaks & Bass",
    description: "Studio set blending breakbeats with deep bass.",
    video: "https://www.youtube.com/embed/ltrMfT4Qz5Y"
  }
]

export default function LiveSetsSection() {
  return (
    <section className={styles.liveSets} id="livesets">
      <h2 className={styles.title}>Live Sets</h2>
      <div className={styles.grid}>
        {sets.map((set, idx) => (
          <motion.div
            className={styles.card}
            key={set.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.09 }}
          >
            <div className={styles.player}>
              <iframe
                width="100%"
                height="210"
                src={set.video}
                title={set.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <h3>{set.title}</h3>
            <p className={styles.desc}>{set.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}