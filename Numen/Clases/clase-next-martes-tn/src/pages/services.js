import Navigation from '@/components/atoms/Navigation'
import Head from 'next/head'


import React from 'react'

const services = () => {
  return (
    <>
        <Head>
            <title>Kimetsu no yaiba (aka Demon Slayer)</title>
        </Head>
        <header>
            <Navigation />
        </header>
        <main>
            <h1>Services</h1>
        </main>
    </>
  )
}

export default services