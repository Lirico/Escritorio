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
    const [isLoading, setIsLoading] = useState(false)

    const upadteQuote = async () => {

        setIsLoading(true)

        const ENDPOINT = "https://api.breakingbadquotes.xyz/v1/quotes";
        const respuesta = await axios.get(ENDPOINT);
        const [newQuote] = await respuesta.data;
        const {quote: text, author} = newQuote;
        
        // Objetos literales
        setQuote({
            text,
            author
        })

        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }


    useEffect(() => {
        upadteQuote()
    }, [])
    

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 300 }}>
      <img
        src="https://logospng.org/download/breaking-bad/logo-breaking-bad-2048.png"
        alt="breaking-bad"
        width="300"
      />
      {
        isLoading ? <Loader /> : <Quote quote={quote}/>
      }
      
      <button onClick={() => upadteQuote()}>Obtener otra cita</button>
    </div>
  );
};

export default BBApp;

