import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'


const Header: React.FC = () => {


    return(
        <header className='fixed bg-primary--theme w-full h-auto top-0 left-0 py-5 shadow-sm z-40'>

            <div className='container'>
                <div className='flex  justify-between  items-center'>
                    
                    <div className='text-xl text-ternary--theme font-semibold'>
                        <Link to='/'> igs studio  </Link>
                    </div>
                    
                    <Menu />
                
                </div>
                
            </div>
        </header>
    )
}

export default Header