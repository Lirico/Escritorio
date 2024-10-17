import { BooksContext } from "@/contexts/BooksContextProvider"
import { useContext } from "react"




const Books = () => {
    const books = useContext(BooksContext)

  return (
    <>
        <ul>
            {
                books.map(book => <li>
                    <p>{book.title}</p>
                    <h3>{book.author}</h3>
                </li>)
            }
        </ul>
    </>
  )
}

export default Books