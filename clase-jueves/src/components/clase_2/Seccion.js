import ListaTarjeta from "./ListaTarjeta";


const destinos = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCS8T2EW5FzgScWdX8etBMNoQ1IYwMe_TjQ&s',
    title: 'Villa La Angostura',
    description: 'Un hermoso lugar con pinos y agua cristalina.',
    bgColor: 'green'
  },
  {
    image: 'https://ciudaddemendoza.gob.ar/wp-content/uploads/2016/10/sliderhome.jpg',
    title: 'Mendoza Capital',
    description: 'Un maravilloso lugar para hacer rafting y comer tremendo asado con vino.',
    bgColor: 'yellow'
  },
  {
    image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/3f/b7/c1.jpg',
    title: 'El Calafate',
    description: 'Un lugar increible para ver caer trozos de hielo gigantes.',
    bgColor: 'aqua'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBK91rCU3q_MblHlzw2JUDEftOLpj9kuzIw&s',
    title: 'Laferrere',
    description: 'Un lugar del que no volves.',
    bgColor: 'black'
  },
]

const Seccion = () => {
  return (
    <>
      <section>
        <h2>Destinos de la Argentina</h2>
        <ListaTarjeta destinos={destinos} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          maiores, voluptatum nemo animi inventore deleniti libero at quis amet
          numquam architecto dolore qui obcaecati temporibus voluptatem velit!
          Pariatur cumque, vero, consequuntur accusamus eveniet omnis culpa
          earum consectetur facere velit ipsum modi assumenda nobis. In, nostrum
          quo quos nemo ipsam odio a nobis? Quasi quos recusandae exercitationem
          optio sapiente aspernatur facere eum, vitae at inventore, nisi illo.
          Doloremque illum impedit ea? Perferendis quis nesciunt accusamus
          laboriosam! Soluta maiores laudantium mollitia voluptatem, praesentium
          repellat repudiandae, incidunt eius dignissimos, architecto sunt.
          Praesentium quia rem unde non nesciunt reprehenderit, modi iure soluta
          quod accusamus vitae nemo fugit, iste totam porro pariatur commodi
          fuga, culpa voluptas esse rerum cupiditate quo quaerat mollitia. Quae
          corrupti obcaecati neque assumenda quo animi saepe quos! Impedit
          maxime eos soluta magni ab fuga explicabo, provident suscipit esse
          consectetur aliquid dolor, laudantium optio aut quam est nulla tempore
          consequuntur, deleniti ipsam. Dicta aspernatur tenetur quisquam harum
          vero magni adipisci ut nemo deserunt suscipit reiciendis animi aperiam
          reprehenderit, commodi modi magnam culpa aliquam. Alias impedit
          officia fugit. Rerum, incidunt ullam doloribus velit et officia
          veritatis modi beatae inventore assumenda, aliquam quis fugit iusto
          consectetur obcaecati quam eum iure vel quasi maiores voluptatibus!
        </p>
      </section>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 80%;
          margin: auto;

          & h2 {
            font-size: 3.5rem;
            padding: 3rem;
          }
          & p {
            line-height: 1.5;
            font-size: 1.1rem;
            padding: 3rem;
          }
        }
      `}</style>
    </>
  );
};

export default Seccion;
