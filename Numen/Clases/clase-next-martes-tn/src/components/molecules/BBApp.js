import { useState, useEffect } from "react";
import axios from "axios";
import Quote from "../atoms/request/Quote";
import Loader from "../atoms/request/Loader";

const initialQuote = {
  text: "",
  author: "",
};

const BBApp = () => {
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(false)

  const udpateQuote = async () => {

    setLoading(true)

    const ENDPOINT = "https://api.breakingbadquotes.xyz/v1/quotes";
    const response = await axios.get(ENDPOINT);
    const [newQuote] = await response.data;
    const { quote: text, author } = newQuote;

    setQuote({
      text: text,
      author: author,
    });

    setTimeout(() => {
        setLoading(false)
    }, 1500);
  };

  useEffect(() => {
    udpateQuote();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 300,
        border: "2px solid #016623"
      }}
    >
      <img
        src="https://logospng.org/download/breaking-bad/logo-breaking-bad-2048.png"
        alt="breaking-bad"
        width="300"
      />
      {
        loading ? <Loader /> : <Quote quote={quote} />
      }
      <button
        style={{
          width: "100%",
        }}
        onClick={udpateQuote}
      >
        Obtener otra cita
      </button>
    </div>
  );
};

export default BBApp;
