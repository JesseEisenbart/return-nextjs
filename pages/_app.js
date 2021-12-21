import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/style.scss'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script src="https://kit.fontawesome.com/8c3026dacb.js"/>
      <Script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/696318c11b60fd78e724b4029/124d4281a6895de7eeaf6e631.js");</Script>
    </Layout>
  )
}

export default MyApp
