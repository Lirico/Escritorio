// Paso 1 - Importar el contexto (aka La Nave aterrizó)
import { BookContext } from "@/context/BooksContextProvider"
// Paso 2 - Importar el hook de contexto (aka El Cartero - Una llave)
import { useContext } from "react";


const Books = () => {

    // Paso 3 - Extraer la prop del contexto usando el hook
    const books = useContext(BookContext);

  return (
    <ul>
        {
            books.map(book => <li key={book.id}>{book.title}</li>)
        }
    </ul>
  )
}

export default Books