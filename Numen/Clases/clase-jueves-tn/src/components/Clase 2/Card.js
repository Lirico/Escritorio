import Button from "./Button";

const Card = ({destino}) => {

  // Destructurando el objeto destino
  const {img, title, text, bgcolor} = destino;

  return (
    <>
      <figure>
        <img
          src={img}
          alt={title}
        />
        <figcaption>
          <h3>{title}</h3>
        </figcaption>
        <p>{text}</p>
        <Button bgcolor={bgcolor} />
      </figure>

      <style jsx>{`
        figure {
            width: 200px;
            height: 275px;
            border: 2px solid black;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        img {
            width: 100%;
            height: 40%;
            object-fit: cover;
        }
        h3 {
            font-size: 1rem
            line-height: 0;
        }
        p {
            text-align: center;
            font-size: .8rem;
            margin-top: -1px;
        }
      `}</style>
    </>
  );
};

export default Card;
