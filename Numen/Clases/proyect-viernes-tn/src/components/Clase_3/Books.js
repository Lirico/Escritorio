import { BooksContext } from "@/context/BooksContextProvider"
import { useContext } from "react"



const Books = () => {
   
    const books = useContext(BooksContext)
    
  return (
    <>
        <ul>
            {
                books.map(({id, author, title}) => <li key={id}>
                    <h3>{title}</h3>
                    <h4>- {author}</h4>
                </li>)
            }
        </ul>
    </>
  )
}

export default Books