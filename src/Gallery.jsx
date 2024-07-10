import React from 'react'
import Slider from './Slider/Slider.jsx'
import TransitionText from './Transitions/TransitionText.jsx'

function Gallery() {
  return (
    <>
    <div className='w-full flex justify-center flex-col items-center' id='galeria'>
    <div className='w-full bg-slate-50 h-0.5 mt-10' />
        <TransitionText>
          <h2 className='text-4xl my-3'>
            Galeria
          </h2>
        </TransitionText>
        
       
    </div>
    <Slider />
    </>
  )
}

export default Gallery
