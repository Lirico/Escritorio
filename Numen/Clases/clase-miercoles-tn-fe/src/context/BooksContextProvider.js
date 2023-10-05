// Paso 1 - Importar la funcion creadora de contexto
import { createContext } from "react"
import { useState } from "react"

// Paso 2 - Crear el contexto (La nave)
export const BookContext = createContext()

const initialState = [
    {
        id: 1,
        title: "Codigo Da Vinci",
        author: "Dan Brown"
    },
    {
        id: 2,
        title: "Harry Potter",
        author: "J.K. Rowling"
    },
    {
        id: 3,
        title: "El principito",
        author: "Antoine de Saint-Exupéry"
    }
]

const BooksContextProvider = (props) => {

    // Paso 3 - Definir el estado (el paquete (de la prop))
    const [books, setBooks] = useState(initialState)

    // Paso 4 - Mandar a llamar al proveedor (el flaco de la gorra)
    // Paso 5 - Entregar el paquete al flaco
    // Paso 6 - Invocar a los hijos del contexto (la lista)
  return (
    <BookContext.Provider value={books}>
        {props.children}
    </BookContext.Provider>
  )
}

export default BooksContextProvider