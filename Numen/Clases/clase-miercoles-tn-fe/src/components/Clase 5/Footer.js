import { ThemeContext } from "@/context/ThemeContextProvider"
import { useContext } from "react"


import React from 'react'

const Footer = () => {

    const [theme] = useContext(ThemeContext)

  return (
    <div
        className={theme}
        style={{
            height: "100vh"
        }}
    >Footer</div>
  )
}

export default Footer