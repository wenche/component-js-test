import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://eds-static.equinor.com/font/equinor-font.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
