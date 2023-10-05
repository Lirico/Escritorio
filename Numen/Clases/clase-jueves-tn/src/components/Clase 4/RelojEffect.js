import { useState, useEffect } from "react"



const Reloj = ({hora}) => <h3>{hora}</h3>


const RelojEffect = () => {

    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        // Montaje y actualizacion
        let temporizador;

        if (visible) {
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1000);
        }
      //  Desmontaje
      return () => clearInterval(temporizador)

    }, [visible])
    

  return (
    <>
        <h2>Reloj con Hooks</h2>
        {
            visible && <Reloj hora={hora}/>
        }
        <button onClick={() => setVisible(true)}>Iniciar</button>
        <button onClick={() => setVisible(false)}>Detener</button>
    </>
  )
}

export default RelojEffect