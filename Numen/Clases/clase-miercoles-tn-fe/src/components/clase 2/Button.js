



const Button = ({bgcolor}) => {
  return (
    <>
        <button>Comprar</button>

        <style jsx>{`
            button {
                background-color: ${bgcolor ? bgcolor : "green"};
                color: white;
                border: none;
                border-radius: .5rem;
                box-shadow: 2px 2px 2px black;
                padding: 10px 20px;
                text-transform: uppercase;
            }
        `}</style>
    </>
  )
}

export default Button