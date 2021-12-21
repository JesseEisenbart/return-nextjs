import Head from 'next/head'

export default function Meta({ description, title, siteTitle }) {
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#291d2b" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content="https://img.itch.zone/aW1nLzc3MDU0OTAucG5n/original/GIXJ58.png" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    </Head>
  )
}