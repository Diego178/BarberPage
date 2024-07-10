import React from 'react'
import logo from './../../public/icon.jpg'
import { data } from './data_socialmedia'
import TransitionComponent from '../Transitions/TransitionComponent';


function Footer() {
  return (
    <TransitionComponent>
      <div className='flex flex-row'>
        <img src={logo} alt="UV Logo" className="w-18 h-16" />
        <div className='flex flex-row w-full justify-center gap-5 items-center'>
          {data.map((socialmedia) => {
            const { Icon, url, name , id} = socialmedia;
            return (
              <Icon key={id} className='h-6 w-6' />
            )
          })}
        </div>
      </div>
    </TransitionComponent>
  )
}

export default Footer
