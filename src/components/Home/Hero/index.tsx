import React from 'react'

const Hero: React.FC = () => {

    return(
        <div className='container '>
            <div className='pt-32 pb-12 max-w-3xl mx-auto'>
                <div className='text-center pb-12'>
                    <h1 className='text-5xl text-quaternary--theme font-extrabold mb-4
                    uppercase'>
                        Разработка сайтов, магазинов и лендингов 
                    </h1>
                    <div className='max-w-3xl mx-auto'>
                        <p className='text-xl mb-8 text-ternary--theme'>
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