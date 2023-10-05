import Button from "./Button"
import { ThemeContext } from "@/context/ThemeContextProvider"
import { useContext } from "react"






const Card = ({destino}) => {
    const [theme] = useContext(ThemeContext)

    // Destructurar el objeto desitno
    const {img, title, text, bgcolor} = destino;

  return (
    <>
        <figure>
            <img src={img} alt={title}/>
            <figcaption>
                <h3>{title}</h3>
            </figcaption>
            <p>{text}</p>
            <Button bgcolor={bgcolor}/>
        </figure>

        <style jsx>{`
            figure {
                width: 200px;
                height: 275px;
                border: 2px solid ${theme === 'light' ? "black" : "yellow"};
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            img {
                width: 100%;
                height: 50%;
                object-fit: cover;
            }
            h3 {
                line-height: 0;
                font-size: 1rem;
            }
            p {
                line-height: 1.1;
                font-size: .8rem;
                text-align: center;
                margin-top: -1px;
                width: 95%;
            }
        `}</style>
    </>
  )
}

export default Card