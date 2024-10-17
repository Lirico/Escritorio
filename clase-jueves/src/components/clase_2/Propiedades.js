



const Propiedades = (props) => {

  return (
    <>
        <ul>
            <li>{props.texto}</li>
            <li>{props.numero}</li>
            <li>{props.booleano}</li>
            <li>{props.arreglo}</li>
            <li>{props.objeto.nombre}</li>
            <li>{props.funcion()}</li>
            <li>{props.elementoJSX}</li>
            <li>{props.componenteReact}</li>
        </ul>
    </>
  )
}

export default Propiedades