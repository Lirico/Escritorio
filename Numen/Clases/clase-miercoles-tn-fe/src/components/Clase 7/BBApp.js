/***** REACT FEATURES *****/
import { useState, useEffect } from "react";
/***** LIBRARIES *****/
import axios from "axios";
/***** COMPONENTS *****/
import Quote from "./Quote";
import Loader from "./Loader";

const initialQuote = {
    text: '',
    author: ''
}

const BBApp = () => {

    const [quote, setQuote] = useState(initialQuote)
    const [isLoading, setIsLoading] = useState(false)

    const updateQuote = async () => {

        setIsLoading(true)

        const ENDPOINT = "https://api.breakingbadquotes.xyz/v1/quotes";
        const response = await axios.get(ENDPOINT);
        const [newQuote] = await response.data
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
        isLoading ? <Loader /> : <Quote quote={quote} />
      }
      <button onClick={() => updateQuote()}>Obtener otra cita</button>
    </div>
  );
};

export default BBApp;

