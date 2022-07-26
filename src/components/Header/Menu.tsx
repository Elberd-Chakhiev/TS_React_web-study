import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu: React.FC = () => {

    const menu: {id: number, title: string, to: string}[] = [
        {id: 0, title: 'главная',         to: '/'},
        {id: 1, title: 'контакты', to: 'contacts'},
        {id: 3, title: 'услуги',    to: 'service'},
        {id: 4, title: 'блог',         to: 'blog'},
    ]

    return(
        <ul className=' flex justify-between'>
        {
            menu.map((item, i) => {
                return(
                    <li className={`text-center ${menu[menu.length - 1] === menu[i] ? '' : 'mr-2'}`}
                    key={item.id}>
                       <NavLink to={item.to}
                       className={`py-1 px-2 block  hover:shadow-sm
                       rounded-sm li_menu--item
                       bg-primary--theme 
                       text-quaternary--theme 
                       hover:bg-quaternary--theme 
                       hover:text-primary--theme`}>
                         {item.title} 
                        </NavLink>
                    </li>
                )
            })
        }
    </ul>
    )
}

export default Menu