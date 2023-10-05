import CardsContainer from "../Clase 2/CardsContainer"
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useContext } from "react";

const Section = () => {

  const data = useContext(ThemeContext)

  const [theme] = data;

  return (
    <>
        <section className={theme}>
            <CardsContainer/>
        </section>

        <style jsx>{`
          section {
            height: 100vh;
          }
        `}</style>
    </>
  )
}

export default Section