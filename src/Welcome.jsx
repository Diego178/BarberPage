import React from 'react'
import Background from './Background/BackgroundRight'
import colage from './assets/colage.png'
import TransitionComponent from './Transitions/TransitionComponent'
import TransitionText from './Transitions/TransitionText'

function Welcome() {


  return (
      <div className='relative w-full'>
        <Background />
        <div className='grid max-w-5xl mx-auto md:grid-cols-2 px-3'>
          <TransitionText>
            <div className='pt-10'>
              <h1 className='text-5xl font-semibold text-cyan-50'>
                
                Bienvendido
                <span className='block degradedBlue bg-cyan-200'>
                  A La Barberia
                </span>
                Invictus
              </h1>
              <h2 className='text-2xl md:text-4xl font-bold text-blue-50 md:pt-20'>
                Since 2021
              </h2>
            </div>
          </TransitionText>
          <TransitionComponent>
            <img className='pt-8' src={colage} />
          </TransitionComponent>
        </div>
      </div>
  )
}

export default Welcome
