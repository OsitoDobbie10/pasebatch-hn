import React from 'react'
import {socialNetworks,TransitionComponent} from "../index";
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <TransitionComponent position='bottom' className='absolute z-40 inline-block w-full top-5 md:top-10'>
    <header className="container justify-between max-w-6xl mx-auto md:flex">
    <NavLink to="/">
    <h1 className="my-3 text-4xl font-bold text-center md:text-left">
      Pase Batch {''}
    <span className="text-red-600">
      InCMS
    </span>
        </h1>
      </NavLink>
      <div className="flex items-center justify-center gap-7">
       {
        socialNetworks.map(({id,logo,src})=>{
            return <NavLink key={id} to={src}  className='transition-all duration-300 hover:text-red-600'>
                   {logo}
                  </NavLink>
        })
       }
      </div>
    </header>
    </TransitionComponent>
  )
}

export default Header;