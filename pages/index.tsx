import Head from 'next/head'
import { SEO } from '../components/SEO'
import HeroSection from '../components/Hero/HeroSection'
import AboutSection from '../components/About/AboutSection'
import EventsSection from '../components/Events/EventsSection'
import SkillsSection from '../components/Skills/SkillsSection'
import ListenSection from '../components/Listen/ListenSection'
import LiveSetsSection from '../components/LiveSets/LiveSetsSection'
import GallerySection from '../components/Gallery/GallerySection'
import BookingSection from '../components/Booking/BookingSection'
import Footer from '../components/Footer/Footer'
import SectionDivider from '../components/SectionDivider'

export default function Home() {
  return (
    <>
      <Head>
        <title>RAYZEN | DJ Portfolio</title>
        <meta name="description" content="RAYZEN — Energy You Feel, Sound You Remember. Futuristic, luxury DJ portfolio. Bookings, mixes, live sets, and more." />
        <meta property="og:title" content="RAYZEN | DJ Portfolio" />
        <meta property="og:image" content="/avatar.jpg" />
        <meta property="og:description" content="Energy You Feel, Sound You Remember. Book RAYZEN for your next event." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SEO />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <EventsSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ListenSection />
      <SectionDivider />
      <LiveSetsSection />
      <SectionDivider />
      <GallerySection />
      <SectionDivider />
      <BookingSection />
      <Footer />
    </>
  )
}