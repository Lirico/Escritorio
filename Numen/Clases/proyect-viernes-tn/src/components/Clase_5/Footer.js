// Paso 1 - Importar el contexto
import { ThemeContext } from "@/context/ThemeContextProvider"
// Paso 2 - Importar el hook (el cartero)
import { useContext } from "react"


const Footer = () => {

  const [theme] = useContext(ThemeContext)

  return (
    <div
        style={{
            height: "100vh"
        }}
        className={theme}
    >Footer</div>
  )
}

export default Footer