import { useState, useEffect } from "react"






const RelojEffect = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const unSegundo = 1000;

        let temporizador;

        if (visible) {
            temporizador = setInterval(() => setHora(new Date().toLocaleTimeString()), unSegundo);
        }

        return () => clearInterval(temporizador)

    }, [visible])
    

  return (
    <>
        <h2>Reloj con Hooks</h2>
        {
            visible && <h3>{hora}</h3>
        }
        <div>
            <button onClick={() => setVisible(true)}>Iniciar</button>
            <button onClick={() => setVisible(false)}>Detener</button>
        </div>
    </>
  )
}

export default RelojEffect