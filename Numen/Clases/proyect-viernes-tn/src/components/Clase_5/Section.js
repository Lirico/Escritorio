// Paso 1 - Importar el contexto
import { ThemeContext } from "@/context/ThemeContextProvider"
// Paso 2 - Importar el hook (el cartero)
import { useContext } from "react"



import React from 'react'

const Section = () => {

  const [theme] = useContext(ThemeContext)

  return (
    <section
        style={{
            height: "100vh"
        }}
        className={theme}
    >Section</section>
  )
}

export default Section