import { useState, useEffect } from "react";
import axios from "axios";
import Quote from "./Quote";
import Loader from "./Loader";

const initialState = {
    text: "",
    author: ""
}

const BBApi = () => {

    const [quote, setQuote] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)

    // ASYNC AWAIT
    // ASYNC declara una fucion como asincrona
    // AWAIT declara una instruccion como a la espera -> para que la mande a la banquina cuando la encuentre

    const updateQuote = async () => {

        setIsLoading(true);
        // Necesito el endpoint -> Donde voy a poder la info que necesito
        const ENDPOINT = "https://api.breakingbadquotes.xyz/v1/quotes";
        // Hacer la peticion de la informacion -> DE TIPO GET
        const response = await axios.get(ENDPOINT)

        const [newQuote] = await response.data;

        const {quote: text, author} = newQuote;

        setQuote({
            ...quote,
            text,
            author
        }) 

        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }

    useEffect(() => {
        updateQuote()
    }, [])
    

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 300 }}>
      <img
        src="https://logospng.org/download/breaking-bad/logo-breaking-bad-2048.png"
        alt="breaking-bad"
        width="300"
      />
      {
        isLoading && <Loader />
      }
      {
        !isLoading && <Quote quote={quote}/>
      }
      <button onClick={() => updateQuote()}>Obtener otra cita</button>
    </div>
  );
};

export default BBApi;





