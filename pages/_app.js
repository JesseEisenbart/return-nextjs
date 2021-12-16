import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/style.scss'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script src="https://kit.fontawesome.com/8c3026dacb.js"/>
    </Layout>
  )
}

export default MyApp
