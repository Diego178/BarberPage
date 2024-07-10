import React from 'react'
import background from './../assets/background-floated-left.png'

function Background() {
  return (
    <div className='ml-4 right-0 absolute -z-50 top-0 bg-black w-full'>
      <img src={background} width={-1} height={650} alt='Circle Right' />
    </div>
  )
}

export default Background