import styles from './SkillsSection.module.scss'
// Removed framer-motion for no animation

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
        <div
          className={styles.left}
        >
          <h2 className={styles.title}>Technical Skills</h2>
          <p className={styles.text}>
            As a DJ and producer, I blend technical mastery with creative intuition. My expertise spans seamless beatmatching, live remixing, and dynamic set curation, using industry-standard tools like Pioneer CDJs, Ableton Live, and Serato DJ Pro. Whether performing on stage or editing in the studio, I prioritize crisp sound quality, smooth transitions, and engaging live experiences.
          </p>
        </div>
        <div
          className={styles.right}
        >
          <div className={styles.cards}>
            {skills.map((skill, i) => (
              <div key={i} className={styles.card}>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}