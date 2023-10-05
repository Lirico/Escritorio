

import CardsContainer from './CardsContainer'

const Section = () => {
  return (
    <>
        <section>
            <h2>Titulo de la sección</h2>
            <CardsContainer />
        </section>

        <style jsx>{`
            section {
                text-align: center;
            }
        `}</style>
    </>
  )
}

export default Section