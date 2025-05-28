import LiveSetsSection from '../components/LiveSets/LiveSetsSection'
import Head from 'next/head'

export default function LiveSetsPage() {
  return (
    <>
      <Head>
        <title>Live Sets | RAYZEN</title>
        <meta name="description" content="RAYZEN's Live Sets" />
      </Head>
      <LiveSetsSection />
    </>
  )
}