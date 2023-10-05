import { useState, useEffect } from "react";
import axios from "axios";
import Quote from "./Quote";
import Loader from "./Loader";

const initialQuote = {
    text: "",
    author: ""
  }

const BBApp = () => {

    const [quote, setQuote] = useState(initialQuote)
    const [loading, setLoading] = useState(false)

    // ASYNC AWAIT

    const updateQuote = async () => {

        setLoading(true)

        // Definir a donde quiero hacer la peticion
        const ENDPOINT = "https://api.breakingbadquotes.xyz/v1/quotes"
        
        // Realizar la peticion al endpoint en cuestion
        const response = await axios.get(ENDPOINT)

        // Pasar a JSON la respuesta de la peticion
        const [newQuote] = await response.data 

        // Destructurar el objeto
        const {quote: text, author} = newQuote;

        // Objetos literales
        setQuote({
            text,
            author
        })

        setTimeout(() => {
            setLoading(false)
        }, 1200);
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
        loading ? <Loader /> : <Quote quote={quote}/>
      }      
      <button style={{width: "100%"}} onClick={updateQuote}>Obtener otra cita</button>
    </div>
  );
};

export default BBApp;
