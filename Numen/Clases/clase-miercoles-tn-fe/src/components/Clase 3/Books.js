// Paso 1 - Importar el contexto (la nave aterriza)
import { BookContext } from "@/context/BooksContextProvider"
// Paso 2 - Importar el hook que permite extraer el paquete del conexto (el cartero)
import { useContext } from "react"

const Books = () => {

    // Paso 3 - Extraer la prop del contexto (entregar el paquete al cartero)
    const books = useContext(BookContext)

  return (
    <>
        <ul>
            {
                books.map(({id, title, author}) => <li key={id}>
                    <p>{title}</p>
                    <h3>{author}</h3>
                </li>)
            }
        </ul>
    </>
  )
}

export default Books