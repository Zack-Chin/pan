import React from 'react'
import { Link } from 'react-router-dom'

function RickyCard({character}) {
  return (
    <div className='card'>
        <img src={character.image} alt={character.name} />
        <div className='card-body'>
            <Link to={`/individual/${character.id}`}>
                <button className='btn' key={character.id}>Detalles</button> 
                {/* <button className='atas' key={character}>Atras</button> */}
            </Link>
        </div>

    </div>
  )
}

export default RickyCard