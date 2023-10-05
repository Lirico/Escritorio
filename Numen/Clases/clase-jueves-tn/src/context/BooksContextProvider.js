// Paso 1 - Importar la funcion creadora de contexto
import { createContext } from "react"
import { useState } from "react";
// Paso 2 - Definir el contexto (La nave)
export const BooksContext = createContext()

const initialState = [
    {
        id: 1,
        title: "El codigo Da Vinci"
    },
    {
        id: 2,
        title: "Harry Potter"
    },
    {
        id: 3,
        title: "Quimica Basica"
    },
];

const BooksContextProvider = ({children}) => {
    // Paso 3 - Definir el estado o prop (el paquete)
    const [books, setBooks] = useState(initialState);

    // Paso 4 - Definir el proveedor (el flaco de la gorra)
    // Paso 5 - Pasarle la prop al proveedor ( entregar el paquete al flaco )
    // Paso 6 - Definir los children (la lista de componentes que pueden acceder al paquete)
  return (
    <BooksContext.Provider value={books}>
        {children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider