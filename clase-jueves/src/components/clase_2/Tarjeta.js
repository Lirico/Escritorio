



import React from 'react'
import Boton from './Boton'

const Tarjeta = (props) => {
  return (
    <>
        <div className="card">
            <img src={props.destino.image} alt="" />
            <div className='card-data'>
                <h3>{props.destino.title}</h3>
                <dfn>{props.destino.description}</dfn>
            </div>
            <Boton bgColor={props.destino.bgColor}/>
        </div>

        <style jsx>{`
            .card {
                width: 300px;
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: .5rem;
                box-shadow: 0px 1px 8px -4px black;
                padding-bottom: 1.5rem;

                & img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-top-left-radius: .5rem;
                    border-top-right-radius: .5rem;
                }
            }
            .card-data {
                width: 85%;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: justify;
                margin-bottom: 2rem;

                & h3 {
                    font-size: 1.5rem;
                    line-height: 3;
                }
                & dfn {
                    font-size: 1.1rem;
                    line-height: 1.3;
                }
            }
        `}</style>
    </>
  )
}

export default Tarjeta