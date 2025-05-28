import Head from 'next/head'
import AboutSection from '../components/About/AboutSection'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | RAYZEN</title>
        <meta name="description" content="Learn more about DJ RAYZEN" />
      </Head>
      <AboutSection />
    </>
  )
}