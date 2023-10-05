// Paso 1 - importar el contexto, aka Aterriza la nave
import { BookContext } from "@/context/bookContextProvider"
// Paso 2 - Importar el hook, aka El permiso
import { useContext } from "react"


const BookList = () => {

    // Paso 3 - Invocar al contexto por medio del hook useContext (DENTRO DE LA FUNCION!!!) y extraer la prop
    const books = useContext(BookContext)

    // Paso 4 - Usar la prop donde queramos
  return (
        <ul>
            {
                books.map(({title, id, author}) => <li key={id}>
                    <h3>{title}</h3>
                    <p>{author}</p>
                </li>)
            }
        </ul>
  )
}

export default BookList