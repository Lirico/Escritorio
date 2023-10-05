import CardsContainer from "../clase 2/CardsContainer"
import { ThemeContext } from "@/context/ThemeContextProvider"
import { useContext } from "react"


const Section = () => {

  const [theme] = useContext(ThemeContext)

  return (
    <>
        <section className={theme}>
            <CardsContainer />
        </section>

        <style jsx>{`
          section {
            height: 100vh
          }
        `}</style>
    </>
  )
}

export default Section