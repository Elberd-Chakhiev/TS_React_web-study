import React from 'react'

const Hero: React.FC = () => {

    return(
        <div className='container '>
            <div className='pt-[32vh] pb-12 max-w-3xl mx-auto'>
                <div className='text-center pb-12'>
                    <h1 className='text-5xl text-quaternary--theme font-extrabold mb-4
                    uppercase'>
                        Разработка  
                        <span className='bg-clip-text text-transparent bg-gradient-to-r
                        from-ternary--theme
                        to-secondary--theme'> сайтов</span>,  
                        <span className='bg-clip-text text-transparent bg-gradient-to-r
                        from-ternary--theme
                        to-secondary--theme'> магазинов</span> и
                        <span className='bg-clip-text text-transparent bg-gradient-to-r
                        from-ternary--theme
                        to-secondary--theme'> лендингов </span> 
                         
                    </h1>
                    <div className='max-w-3xl mx-auto'>
                        <p className='text-xl mb-8 text-quaternary--theme'>
                            Our landing page template works on all devices,
                            so you only have to set it up once, 
                            and get beautiful results forever.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

} 

export default Hero 