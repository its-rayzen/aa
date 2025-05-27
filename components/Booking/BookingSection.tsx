import styles from './BookingSection.module.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'

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
    setTimeout(() => { setSubmitted(false) }, 4000)
    setForm({ name: '', email: '', type: '', location: '', date: '', message: '' })
  }

  return (
    <section className={styles.booking} id="booking">
      <h2 className={styles.title}>Booking / Contact</h2>
      <div className={styles.formWrap}>
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={handleChange}
          />
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
          <input
            type="text"
            name="location"
            placeholder="Location"
            required
            value={form.location}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            required
            value={form.date}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Tell us about your event..."
            rows={4}
            required
            value={form.message}
            onChange={handleChange}
          />
          <motion.button
            type="submit"
            className={styles.glowBtn}
            whileHover={{ scale: 1.07, boxShadow: "0 0 16px #fff" }}
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
      </div>
    </section>
  )
}