




const Boton = (props) => {
  return (
    <>
        <button>Comprar</button>

        <style jsx>{`
            button {
                background-color: ${props.bgColor};
                color: white;
                border: none;
                padding: 10px 15px;
                border-radius: 20px;
                box-shadow: 0px 2px 8px -4px black;
                font-size: 1.5rem;
                text-transform: uppercase;
            }
        `}</style>
    </>
  )
}

export default Boton