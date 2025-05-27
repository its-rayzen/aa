import styles from './SkillsSection.module.scss'
import { motion } from 'framer-motion'
import { FaWaveSquare, FaRandom, FaHeadphones, FaChartLine, FaUsers, FaRetweet } from 'react-icons/fa'

const skills = [
  {
    icon: <FaWaveSquare />,
    label: "Smooth Transitions",
    tooltip: "Seamless, on-beat crossfades and blend mastery."
  },
  {
    icon: <FaChartLine />,
    label: "Harmonic Mixing",
    tooltip: "Advanced harmonic blends using Camelot wheel."
  },
  {
    icon: <FaRetweet />,
    label: "Looping & FX",
    tooltip: "Live looping, stutter, and creative FX usage."
  },
  {
    icon: <FaRandom />,
    label: "Build/Drop Mastery",
    tooltip: "Dynamic build-ups and drops for max energy."
  },
  {
    icon: <FaUsers />,
    label: "Crowd Reading",
    tooltip: "Intuitive, real-time reading of dancefloor energy."
  },
  {
    icon: <FaHeadphones />,
    label: "Live Mashups",
    tooltip: "On-the-fly mashups and edits, always in key."
  }
]

export default function SkillsSection() {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.title}>Technical Skills</h2>
      <div className={styles.visuals}>
        <div className={styles.camelot}>
          <img src="/camelot-wheel.png" alt="Camelot Wheel" />
        </div>
        <div className={styles.energy}>
          <img src="/energy-curve.png" alt="Energy Curve Graph" />
        </div>
      </div>
      <div className={styles.grid}>
        {skills.map((skill, idx) => (
          <motion.div
            className={styles.skill}
            key={skill.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <div className={styles.icon} data-tooltip={skill.tooltip}>
              {skill.icon}
            </div>
            <span>{skill.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}