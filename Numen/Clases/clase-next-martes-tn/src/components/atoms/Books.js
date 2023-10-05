import { useState } from "react"




const Books = () => {

    const [books, setBooks] = useState([
        {id: 1, title: "El señor de los anillos"},
        {id: 2, title: "El lado positivo del fracaso"},
        {id: 3, title: "50 sombras de grey"}
    ])

    const addBook = () => setBooks(books => {

        return [
            ...books,
            {id: 4, title: "Harry Potter"}
        ]
    })

  return (
    <>
        <ul>
            {
                books.map(book => <li key={book.id}>{book.title}</li>)
            }
        </ul>
        <button onClick={addBook}>Agregar libro</button>
    </>
  )
}

export default Books