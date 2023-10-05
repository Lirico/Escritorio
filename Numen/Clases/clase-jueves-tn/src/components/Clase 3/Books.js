// Paso 1 - Importar el contexto
import { BooksContext } from "../../context/BooksContextProvider";
// Paso 2 - Importar el hook de contexto (el cartero)
import { useContext } from "react";
const Books = () => {
  const books = useContext(BooksContext)

  return (
    <>
      <ul>
        {
          books.map(({id, title}) => <li key={id}>{title}</li>)
        }
      </ul>
    </>
  );
};

export default Books;
