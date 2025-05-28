import Head from 'next/head'
import GallerySection from '../components/Gallery/GallerySection'

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery | RAYZEN</title>
        <meta name="description" content="Photo Gallery of RAYZEN performances" />
      </Head>
      <GallerySection />
    </>
  )
}