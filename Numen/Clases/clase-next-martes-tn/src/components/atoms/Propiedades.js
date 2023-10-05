


const Propiedades = (props) => {
  return (
    <>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano}</li>
            <li>{props.objeto.nombre}</li>
            <li>{props.arreglo}</li>
            <li>{props.funcion()}</li>
            <li>{props.elementoJSX}</li>
            <li>{props.reactComponente}</li>
        </ul>
    </>
  )
}

export default Propiedades
