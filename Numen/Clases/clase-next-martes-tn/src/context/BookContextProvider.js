// Paso 1 - Mandar a llamar la funcion creadora de contexto
import { createContext, useState } from "react"

// Paso 2 - Crear el conexto y hacerlo exportable, aka Nave
export const BookContext = createContext()


const BookContextProvider = ({children}) => {

    // Paso 3 - Definir la prop a exportar
    const [books, setBooks] = useState([
        {id: 1, title: 'Codigo Da Vinci', author: 'Dan Brown'},
        {id: 2, title: 'Harry Potter', author: 'J.K. Rowling'},
        {id: 3, title: 'El Principito', author: 'Antoine de Sanit-Exupery'}
    ])

  return (
    // Paso 4 -Llamar al proveedor del context, aka flaco de la gorra, y envolver los elementos que recibiran la prop
    <BookContext.Provider 
        // Paso 5 - Pasarle la prop al proveedor, aka Paquete al flaco
        value={books}>
        {/* Paso 6 - Invocar al children para poder pasar la prop a los componentes */}
        {children}
    </BookContext.Provider>
  )
}

export default BookContextProvider