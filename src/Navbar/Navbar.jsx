import React from 'react'
import { Link } from "react-router-dom";
import logo from './../../public/icon.jpg'
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import TransitionComponent from './../Transitions/TransitionComponent.jsx'

function Navbar() {
  return (
    <TransitionComponent>
      <div className="w-full lg:px-16 top-0 z-10 bg-black">
        <div className="relative flex w-full mx-2 items-end place-content-between md:flex-row md:px-6">
          <div className="flex flex-row items-center justify-between lg:justify-start p-2">
              <Link to="/" className="text-white inline-flex items-center">
                <img src={logo} alt="UV Logo" className="w-18 h-16" />
              </Link>
          </div>

            <nav className="flex place-items-end justify-between flex-row p-2 h-full">
              <MenuDesktop />
              <MenuMobile />
              
            </nav>

        </div>
      </div>
    </TransitionComponent>
  )
}

export default Navbar
