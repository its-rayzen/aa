import ListenSection from '../components/Listen/ListenSection'
import Head from 'next/head'

export default function ListenPage() {
  return (
    <>
      <Head>
        <title>Listen | RAYZEN</title>
        <meta name="description" content="Listen to RAYZEN's Music" />
      </Head>
      <ListenSection />
    </>
  )
}