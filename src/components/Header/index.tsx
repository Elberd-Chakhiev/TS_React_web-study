import React from 'react'

const Header: React.FC = () => {

    const [menuActive, setMenuActive] = React.useState<boolean>(false)


    const menu: {id: number, title: string}[] = [
        {id: 0, title: 'item'},
        {id: 1, title: 'item'}, 
        {id: 2, title: 'item'}, 
        {id: 3, title: 'item'}, 
        {id: 4, title: 'item'}, 
        {id: 5, title: 'item'}, 
    ]

    return(
        <header className='w-full h-auto top-0 left-0 py-5 shadow-lg z-40'>
            <div className='container'>
                <div className='flex justify-between  items-center'>
                    {
                        !menuActive &&
                        <div className='text-xl text-ternary--theme font-semibold'>
                            <a href='##'> igs studio  </a>
                        </div>
                    }


                    <ul className='w-1/2 text-center'>
                        {menuActive &&
                            menu.map(item => {
                                return(
                                    <li key={item.id}>
                                        {item.title}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div onClick={() => setMenuActive(!menuActive)} 
                    className={`${ menuActive ? 'w-96' : 'w-6'}
                    transition-all relative ` }>
                        <div  className={` fill-quaternary--theme cursor-pointer `}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">    <path d="M 9.6679688 2 L 9.1757812 4.5234375 C 8.3550224 4.8338012 7.5961042 5.2674041 6.9296875 5.8144531 L 4.5058594 4.9785156 L 2.1738281 9.0214844 L 4.1132812 10.707031 C 4.0445153 11.128986 4 11.558619 4 12 C 4 12.441381 4.0445153 12.871014 4.1132812 13.292969 L 2.1738281 14.978516 L 4.5058594 19.021484 L 6.9296875 18.185547 C 7.5961042 18.732596 8.3550224 19.166199 9.1757812 19.476562 L 9.6679688 22 L 14.332031 22 L 14.824219 19.476562 C 15.644978 19.166199 16.403896 18.732596 17.070312 18.185547 L 19.494141 19.021484 L 21.826172 14.978516 L 19.886719 13.292969 C 19.955485 12.871014 20 12.441381 20 12 C 20 11.558619 19.955485 11.128986 19.886719 10.707031 L 21.826172 9.0214844 L 19.494141 4.9785156 L 17.070312 5.8144531 C 16.403896 5.2674041 15.644978 4.8338012 14.824219 4.5234375 L 14.332031 2 L 9.6679688 2 z M 12 8 C 14.209 8 16 9.791 16 12 C 16 14.209 14.209 16 12 16 C 9.791 16 8 14.209 8 12 C 8 9.791 9.791 8 12 8 z"/></svg> 
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header