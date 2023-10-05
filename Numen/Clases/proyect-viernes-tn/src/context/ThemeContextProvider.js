// Paso 1 - Importar la funcion creadora de contexto
import { createContext } from "react"
// Paso 2 - importar el estado
import { useState } from "react"

// Paso 3 - Crear el contexto (la nave)
export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    // Paso 4 - Crear el paquete
    const [theme, setTheme] = useState("light")

    const handleTheme = (e) => {
        // Aqui lo que quiero es que detecte desde que imput estoy ejecutando el evento. Si del input
        // de light o del input de dark.
        // En caso de que sea del input de light quiero que actualice a light, y sino a dark.
        // Entonces necesito una estructura if.
        // Entonces aqui necesitaremos usar el objeto de eventos.
        // Se acuerdan del e.target? Hacia referencia al elemento con el que el usuario esta interactuando
        // Y una vez que lo detecta, lee su value y lo compara con light o dark
        // Y listo, ahora solo neceisto pasar las props al componente.
        // Fijense

        if(e.target.value === "light") {
            setTheme("light") // Gracias Jose!
        } else {
            setTheme("dark")
        }
    }

    // Voy a crear un arreglo para coleccionar ambas props
    const data = [theme, handleTheme]
    // Y ahora paso la data al flaco de la gorra

    // Paso 5 - MAndar a llamar al proveedor
    // Paso 6 - Invocar a los hijos
  return (
    <ThemeContext.Provider value={data}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider