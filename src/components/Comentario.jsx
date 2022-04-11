import React from 'react'
import './cometario.css';

function Comentario(props) {
    return (
        <div className='container'>
            <div className='container-testimonio '>
                <img className='imgen-testimonio rounded '
                    src={require(`../imagenes/person${props.imagen}.jpg`)}
                    alt='Foto' />
                <div className='container-texto-testimonio'>

                    <p className='nombre-testimonio'>{props.nombre}</p>
                    <p className='cargo-testimonio'>{props.cargo}</p>
                    <p className='texto-testimonio'>"{props.testimonio}"
                    </p>


                </div>
            </div>

        </div>
    );
}

export default Comentario