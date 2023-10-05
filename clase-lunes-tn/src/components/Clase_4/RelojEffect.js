import { useState, useEffect } from "react"

useState

function Reloj({hora}) {
    return <h3>{hora}</h3>
}


const RelojEffect = () => {

    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [esVisible, setEsVisible] = useState(false)

    useEffect(() => {
        let temporizador;

        // Fase de montaje y fase de actualizacion
        if (esVisible) {
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1000);
        }

        // Fase de desmontaje
        return () => clearInterval(temporizador)

    }, [esVisible])
    

  return (
    <>
        <h2>Reloj con Efecto</h2>
        {
            esVisible && <Reloj hora={hora}/> 
        }
        <button onClick={() => setEsVisible(true)}>Iniciar</button>
        <button onClick={() => setEsVisible(false)}>Detener</button>
    </>
  )
}

export default RelojEffect