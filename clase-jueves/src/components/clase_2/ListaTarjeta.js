import Tarjeta from "./Tarjeta"



const ListaTarjeta = (props) => {
  return (
    <>
        <div className="cards">
            {
                props.destinos.map(destino => <Tarjeta destino={destino} />)
            }
        </div>

        <style jsx>{`
            .cards {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                width: 100%;
            }
        `}</style>
    </>
  )
}

export default ListaTarjeta