import React from 'react'
import { routes } from './Routes';

function MenuDesktop() {
  return (
    <ul className="hidden md:flex lg:items-center gap-5 text-sm">
      {routes.map((route) => {
        const { Icon, href, title, id } = route;
        return (
          <li key={id} >
            <a
                
              href={href}
              className="flex text-neutral-100 items-center gap-1 hover:text-neutral-400 transition-all"
            >
              <Icon />
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  )
}

export default MenuDesktop
