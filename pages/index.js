import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Meta from '../components/Meta'


export default function Home() {
  return (
    <div >
      <Meta siteTitle="Home" title="Return" description="Return is an art driven, sidescrolling adventure set in the apocalyptic rebirth of your home planet, where your only hope of survival is to explore the unfamiliar landscape."/>
      <Hero />
      <Main />
      <Footer />
    </div>
  )
}
