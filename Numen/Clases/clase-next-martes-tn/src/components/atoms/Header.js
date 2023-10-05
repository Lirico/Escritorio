import { ThemeContext } from '@/context/ThemeContextProvider'
import { useContext } from 'react'

const Header = () => {

    const data = useContext(ThemeContext)

    const [theme, handleTheme] = data;

  return (
    <header className={theme}>
        <form >
            <fieldset>
                <label htmlFor="light">Light</label>
                <input type="radio" name="same" id="light" value="light" onClick={handleTheme}/>
                <label htmlFor="dark">Dark</label>
                <input type="radio" name="same" id="dark" value="dark" onClick={handleTheme}/>
            </fieldset>
        </form>
    </header>
  )
}

export default Header