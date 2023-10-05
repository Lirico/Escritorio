import { useState, useEffect } from "react"

function Reloj({hora}) {
    return <h3>{hora}</h3>
}


const RelojEffect = () => {

    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        let temporizador;

        // Montaje y actualizacion
        if (visible) {
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1000);
        }

        // Desmontaje
        return () => {
            clearInterval(temporizador)
        }

    }, [visible])

    

  return (
    <>
        <h2>Reloj con Hooks</h2>
        {
            visible ? <Reloj hora={hora}/> : null
        }
        <button onClick={() => setVisible(true)}>Iniciar</button>
        <button onClick={() => setVisible(false)}>Detener</button>
    </>
  )
}

export default RelojEffect