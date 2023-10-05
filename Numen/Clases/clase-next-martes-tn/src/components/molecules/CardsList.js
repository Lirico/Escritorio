



import React from 'react'
import Card from '../atoms/Card'

const Destinos = [
  {
    id: 1,
    img: "https://www.cronista.com/files/image/412/412545/61a7a7fe6e5bd_700_350!.jpg?s=7c9a101099976137ad1804ef6c77f9c2&d=1638806004",
    title: "Villa La Angostura",
    text: "Un hermoso lugar para pasar las vacaciones cuando sos politico con el dinero del contribuyente.",
    btnBgColor: "rgb(0, 128, 0)",
  },
  {
    id: 2,
    img: "https://www.yacaretours.com.ar/manager/programas/108/grandes/perito.jpg",
    title: "El Calafate",
    text: "Un hermoso lugar para ver desplomarse glaciares",
    btnBgColor: "blue"
  },
  {
    id: 3,
    img: "https://media.viajando.travel/p/e44e573416a639e1fdb99b2de22301f7/adjuntos/255/imagenes/000/328/0000328266/1200x675/smart/mendoza-capitaljpg.jpg",
    title: "Mendoza Capital",
    text: "Un hermoso lugar para hacer rafting y comer hasta morir",
    btnBgColor: "yellow"
  },
  {
    id: 4,
    img: "https://media.vivieloeste.com.ar/p/11945e70627c1dce72d4f4c7dbfcc24b/adjuntos/320/imagenes/000/063/0000063964/412x232/smart/imagepng.png",
    title: "Laferrere",
    text: "Un hermoso lugar para no volver a tu casa",
    btnBgColor: "black"
  },
]

const CardsList = () => {
  return (
    <section>
      {
        Destinos.map(destino => <Card 
          key={destino.id}
          data={destino}
        />)
      }
      <style jsx>{`
        section {
          display: flex;
          justify-content: space-between;
          height: 100vh;
        }
      `}</style>
    </section>
  )
}

export default CardsList