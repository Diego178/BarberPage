import React from 'react'
import Welcome from './Welcome'
import Servicios from './Servicios'
import Ubicacion from './Ubicacion'
import Gallery from './Gallery'

function PaginaPrincipal() {
  return (
    <div>
      <div className='bg-amber-400 w-full h-0.5'></div>
      <div className='w-full flex justify-center' >
        <div className='bg-amber-400 rounded-b'>
          <a className='px-2 text-black'>Demo</a>
        </div>
        

      </div>
      <Welcome />
      <Servicios />
      <Gallery />
      <Ubicacion />

    </div>
  )
}

export default PaginaPrincipal
