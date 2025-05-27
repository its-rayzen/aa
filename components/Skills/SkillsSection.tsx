import styles from './SkillsSection.module.scss'
import { motion } from 'framer-motion'

const skills = [
  {
    title: "DJ Performance",
    desc: "Expert beatmatching, seamless transitions, and crowd reading using Pioneer CDJs, vinyl, and digital decks."
  },
  {
    title: "Music Production",
    desc: "Original track creation, remixing, and edits with Ableton Live, FL Studio, and industry plugins."
  },
  {
    title: "Live Edits & FX",
    desc: "On-the-fly remixing, effects, and mashups using MIDI controllers and real-time processing."
  }
]

export default function SkillsSection() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.content}>
        <motion.div
          className={styles.left}
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className={styles.title}>Technical Skills</h2>
          <p className={styles.text}>
            As a DJ and producer, I blend technical mastery with creative intuition. My expertise spans seamless beatmatching, live remixing, and dynamic set curation, using industry-standard tools like Pioneer CDJs, Ableton Live, and Serato DJ Pro. Whether performing on stage or editing in the studio, I prioritize crisp sound quality, smooth transitions, and engaging live experiences.
          </p>
        </motion.div>
        <motion.div
          className={styles.right}
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.cards}>
            {skills.map((skill, i) => (
              <motion.div key={i} className={styles.card} whileHover={{ scale: 1.04 }}>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}