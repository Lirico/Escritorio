import Card from "./Card";

const CardsContainer = () => {
  const destinos = [
    {
      id: 1,
      img: "https://media.staticontent.com/media/pictures/13b60a5b-f162-42f4-a7bf-a47b868724ff",
      title: "Villa La Angostura",
      text: "Un hermoso lugar para pasar el invierno",
      bgcolor: "green",
    },
    {
      id: 2,
      img: "https://ciudaddemendoza.gob.ar/wp-content/uploads/2016/10/sliderhome.jpg",
      title: "Mendoza Capital",
      text: "Un maravilloso lugar para hacer rafting y comer asado con vino",
      bgcolor: "yellow",
    },
    {
      id: 3,
      img: "https://media.viajando.travel/p/2f20979e9b94ab7dff883bde34932504/adjuntos/236/imagenes/000/499/0000499639/vacaciones-invierno-el-calafate.jpg",
      title: "El Calafate",
      text: "Un lugar ideal para ver desmoronarse trozos grandes de hielo",
      bgcolor: "aqua",
    },
    {
      id: 4,
      img: "https://media.vivieloeste.com.ar/p/11945e70627c1dce72d4f4c7dbfcc24b/adjuntos/320/imagenes/000/063/0000063964/412x232/smart/imagepng.png",
      title: "Laferrere",
      text: "Un lugar del que no volves"
    },
  ];

  return (
    <>
      <div>
        {destinos.map((destino) => (
          <Card key={destino.id} destino={destino} />
        ))}
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
};

export default CardsContainer;
