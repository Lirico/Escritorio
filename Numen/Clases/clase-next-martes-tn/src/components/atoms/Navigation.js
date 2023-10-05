import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <nav>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
    </nav>
  )
}

export default Navigation