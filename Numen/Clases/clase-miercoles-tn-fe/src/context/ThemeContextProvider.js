import { createContext } from "react"
import { useState } from "react"

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    const [toggleTheme, setToggleTheme] = useState(false)

    const handleTheme = (e) => {
        setToggleTheme(!toggleTheme)
    }

    const theme = toggleTheme ? 'dark' : 'light'

    const data = [theme, handleTheme, toggleTheme]

  return (
    <ThemeContext.Provider value={data}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider