import { useState, useEffect } from "react"


const Reloj = ({hora}) => <h3>{hora}</h3>


const RelojEffect = () => {

    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        let temporizador;

        // La fase de montaje y la fase de actualizacion
        if (visible) {
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1000);
        } else {
            clearInterval(temporizador)
        }

        // Fase de desmontaje
        return () => clearInterval(temporizador)

    }, [visible])
    

  return (
    <>
        <h2>Reloj con Hooks</h2>
        {
            visible && <Reloj hora={hora} />
        }
        {   
            !visible && null
        }
        <button onClick={() => setVisible(true)}>Iniciar</button>
        <button onClick={() => setVisible(false)}>Detener</button>
    </>
  )
}

export default RelojEffect