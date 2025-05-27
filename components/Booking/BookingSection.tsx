import styles from './BookingSection.module.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiMail, FiMapPin, FiCalendar, FiMessageCircle } from 'react-icons/fi'

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    location: '',
    date: '',
    message: ''
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', type: '', location: '', date: '', message: '' })
  }

  return (
    <section className={styles.booking} id="booking">
      <motion.h2 className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Booking / Contact
      </motion.h2>
      <motion.div
        className={styles.formWrap}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
          <div className={styles.inputGroup}>
            <FiUser className={styles.icon} />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <FiMail className={styles.icon} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <select
              name="type"
              required
              value={form.type}
              onChange={handleChange}
            >
              <option value="">Type of Event</option>
              <option value="Club">Club</option>
              <option value="Festival">Festival</option>
              <option value="Private">Private</option>
              <option value="Corporate">Corporate</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <FiMapPin className={styles.icon} />
            <input
              type="text"
              name="location"
              placeholder="Location"
              required
              value={form.location}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <FiCalendar className={styles.icon} />
            <input
              type="date"
              name="date"
              required
              value={form.date}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <FiMessageCircle className={styles.icon} />
            <textarea
              name="message"
              placeholder="Tell us about your event..."
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <motion.button
            type="submit"
            className={styles.glowBtn}
            whileHover={{ scale: 1.07, boxShadow: "0 0 24px #fff" }}
          >
            Send Request
          </motion.button>
        </form>
        {submitted && (
          <motion.div
            className={styles.confirm}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Thank you! Your request has been sent.
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}