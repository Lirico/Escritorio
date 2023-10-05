// Paso 1 - Importar el contexto
import { ThemeContext } from "@/context/ThemeContextProvider"
// Paso 2 - Importar el hook (el cartero)
import { useContext } from "react"


const Header = () => {

  // Usar el hook para extraer la props del contexto
  // Destructuro ambas props
  const [theme, handleTheme] = useContext(ThemeContext)

  // En cada radio boton manejaremos uno de los temas claro y oscuro, y necesitamos crear
  // un contexto para poder pasarle propieades tanto a este componente como los demas.
  // Fijense lo siguientes.

  // Fijense que cada input tiene un value, puedo usar ese value para rastrear con que input esta interactuando
  // el usuario. Y si esta interactuando con light, cambiare a light y viceversa.

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