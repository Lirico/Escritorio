// Paso 1 -  Importar la funcion creadora de contexto (createContext())
import { createContext, useState } from "react"

// Paso 2 - Crear el contexto (aka La Nave)
export const BookContext = createContext()


const BooksContextProvider = (props) => {

    // Paso 3 - Definir la prop a despachar (aka El paquete)
    const [books, setBooks] = useState([
        {
            id: 1,
            title: "El señor de los anillos"
        },
        {
            id: 2,
            title: "El club de las 5 de la mañana"
        },
        {
            id: 3,
            title: "50 sombras de gray"
        }
    ])


    
    // Objetos literales -> 2015 -> ES6
    const data = {
        books,
        setBooks
    }

    // Paso 4 - Invocar al proveedor del context (aka El flaco de la gorra)
    // Paso 5 - Colocar la prop en value (aka Ponerle el paquete en la mano al flaco)
    // Paso 6 - Definir los children (aka La lista de componentes que pueden acceder al paquete)
  return (
    <BookContext.Provider value={data}>
        {props.children}
    </BookContext.Provider>
  )
}

export default BooksContextProvider
