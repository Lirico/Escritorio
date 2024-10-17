import { createContext, useState } from "react"

// Crear el contexto -> La nave
export const BooksContext = createContext()


const BooksContextProvider = (props) => {

    // Establecer el estado -> El paquete
const [books, setBooks] = useState([
        {
            title: 'Harry el sucio Potter',
            author: 'El Bananero'
        },
        {
            title: 'El Señor de los novillos',
            author: 'Samid'
        },
        {
            title: '50 sombras de gray',
            author: 'Alguien con mucho tiempo libre'
        }
    ])
    // Definir el provider -> El flaco de la gorra
    // Pasar la prop al provider -> Ponerle el paquete en la mano al flaco.
    // Definir los componentes que tendran la prop habilitada -> Lista del flaco
  return (
    <BooksContext.Provider value={books}>
        {props.children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider