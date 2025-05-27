import styles from './EventsSection.module.scss'
import { motion } from 'framer-motion'

const events = [
  {
    name: "Noir Nights Open Air",
    date: "2024-09-15",
    time: "22:00",
    venue: "Skyline Park, Berlin",
    flyer: "/events/noir-nights.jpg",
    tags: ["Open Air", "Techno"]
  },
  {
    name: "Pulse Room Residency",
    date: "2024-08-12",
    time: "01:00",
    venue: "Pulse Room, Hamburg",
    flyer: "",
    tags: ["Residency", "Club"]
  },
  {
    name: "Sublevel Underground",
    date: "2024-07-05",
    time: "00:30",
    venue: "Sublevel, Leipzig",
    flyer: "/events/sublevel.jpg",
    tags: ["Underground", "Tech-house"]
  }
]

export default function EventsSection() {
  return (
    <section className={styles.events} id="events">
      <h2 className={styles.title}>Events</h2>
      <div className={styles.timeline}>
        {events.map((event, idx) => (
          <motion.div
            className={styles.eventCard}
            key={event.name + event.date}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <div className={styles.flyer}>
              {event.flyer ? (
                <img src={event.flyer} alt={`${event.name} flyer`} />
              ) : (
                <div className={styles.flyerPlaceholder}>No Flyer</div>
              )}
            </div>
            <div className={styles.details}>
              <h3>{event.name}</h3>
              <div className={styles.meta}>
                <span>{event.date}</span>
                <span>{event.time}</span>
                <span>{event.venue}</span>
              </div>
              <div className={styles.tags}>
                {event.tags.map(tag => (
                  <span className={styles.tag} key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}