
import Navigation from '@/components/Navigation'

import Head from 'next/head'

const contact = () => {
  return (
    <>
        <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Navigation />
        </header>
        <main>
            <h1>Contact</h1>
        </main>
    </>
  )
}

export default contact