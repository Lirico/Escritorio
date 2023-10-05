import { createContext, useState } from "react"
import BookContextProvider from "./bookContextProvider"

export const ThemeContext = createContext()


const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState("light")

    const handleTheme = (e) => {
        if ( e.target.value === "light" ) {
            setTheme("light")
        } else if(e.target.value === "dark") {
            setTheme("dark")
        }
    }

    const data = [theme, handleTheme]

  return (
    <ThemeContext.Provider value={data}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider