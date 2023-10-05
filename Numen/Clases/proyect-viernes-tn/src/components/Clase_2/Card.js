import Button from "./Button"


const Card = ({destino}) => {

    const {img, title, text, bgcolor} = destino;

  return (
    <>
        <figure>
            <img src={img} />
            <figcaption>
                <h3>{title}</h3>
            </figcaption>
            <p>{text}</p>
            <Button bgcolor={bgcolor} />
        </figure>

        <style jsx>{`
            figure {
                min-width: 200px;
                min-height: 275px;
                max-width: 200px;
                max-height: 275px;
                border: 2px solid black;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            img {
                width: 100%;
                height: 45%;
                object-fit: cover;
            }
            h3, p {
                text-align: center;
            }
            h3 {
                font-size: 1rem;
                line-height: 0;
            }
            p {
                font-size: 0.8rem;
            }
        `}</style>
    </>
  )
}

export default Card