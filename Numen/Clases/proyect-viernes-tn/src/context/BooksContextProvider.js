// Paso 1 - Importar la funcion creadora de contexto
import { createContext } from "react"
import { useState } from "react"
// Paso 2 - Crear Contexto a.k.a La Nave
export const BooksContext = createContext()


const BooksContextProvider = (props) => {

    // Definir la prop a exportar a.k.a El Paquete a entregar
    const [books, setBooks] = useState([
        {
            id: 1, title: "Codigo Da Vinci", author: "Dan Brown"
        },
        {
            id: 2, title: "Harry Potter", author: "J.K. Rowling"
        },
        {
            id: 3, title: "El Principito", author: "Antoine de Saint-Exupéry"
        }
    ])
    // Paso 3 - Definir el proveedor a.k.a El Flaco de la gorra
    // Paso 4 - Pasar el paquete al flaco (pasar la prop)
    // Paso 5 - Definir los children aka La lista de componentes que pueden acceder a la prop
  return (
    <BooksContext.Provider value={books}> 
        {props.children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider