import React from 'react'
import map from './assets/map.png'
import TransitionText from './Transitions/TransitionText'
import TransitionComponent from './Transitions/TransitionComponent'
import Background from './Background/BackgroundLeft'

function Ubicacion() {
  return (
    <div className='flex flex-col justify-center items-center' id='ubicacion'>
    <Background />
    <div className='w-full bg-slate-50 h-0.5 mt-10' />
      <TransitionText>
        <h1 className='text-3xl text-yellow-50 font-medium pb-5 mt-5'>
          Nos ubicamos en
        </h1>
      </TransitionText>
      <TransitionComponent className='w-full flex items-center justify-center'>
        <img src={map}  width={400} height={300} className=' rounded-lg px-6 justify-center pb-8' />
      </TransitionComponent>

    </div>
  )
}

export default Ubicacion
