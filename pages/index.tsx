import Head from 'next/head'
import HeroSection from '../components/Hero/HeroSection'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | RAYZEN</title>
        <meta name="description" content="Welcome to RAYZEN - Professional DJ" />
      </Head>
      <HeroSection />
    </>
  )
}