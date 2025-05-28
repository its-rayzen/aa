import EventsSection from '../components/Events/EventsSection'
import Head from 'next/head'

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Events | RAYZEN</title>
        <meta name="description" content="Upcoming events and performances" />
      </Head>
      <EventsSection />
    </>
  )
}