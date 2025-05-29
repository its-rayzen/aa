import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload key images */}
        <link rel="preload" as="image" href="/avatar.jpg" />
        <link rel="preload" as="image" href="/gallery1.jpg" />
        <link rel="preload" as="image" href="/gallery2.jpg" />
        <link rel="preload" as="image" href="/gallery3.jpg" />
        <link rel="preload" as="image" href="/gallery4.jpg" />
        <link rel="preload" as="image" href="/gallery5.jpg" />
        <link rel="preload" as="image" href="/gallery6.jpg" />
        {/* Preload fonts example */}
        {/* <link rel="preload" href="/fonts/YourFont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
