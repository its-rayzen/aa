import BookingSection from '../components/Booking/BookingSection'
import Head from 'next/head'
import styles from '../styles/BookingPage.module.scss'

export default function BookingPage() {
  return (
    <>
      <Head>
        <title>Booking | RAYZEN</title>
        <meta name="description" content="Book RAYZEN for your event" />
      </Head>
      <main className={styles.main}>
        <BookingSection />
      </main>
    </>
  )
}