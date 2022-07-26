import React from "react";



const Contacts = () => {



    const inputs =[
        {id: 0, placeholder:"ваше имя", type: 'text', ref: React.useRef()},
        {id: 1, placeholder:"телефон",  type: 'tel',  ref: React.useRef()},
        {id: 2, placeholder:"почта",    type: 'text', ref: React.useRef()},
    ]; 



    return(
        <div className="container  ">
            <h2 className="text-quaternary--theme  pt-24 text-4xl font-semibold"> 
            <span className="text-ternary--theme">Свяжитесь</span>  с нами 
            </h2>
            <div className=" flex justify-center   bg-second_color rounded-lg py-24 lg:py-12">

                <div >
                    <form action="" method="POST" className="flex lg:flex-col">
                    <div className="p-2 overflow-hidden">
                    {
                        inputs.map(input => {
                            return(
                                <div key={input.id} 
                                className={ 'contacts--page-input relative ' + 
                                (input.id ===  inputs.length - 1 ? '': 'mb-4')}>
                                    <input 
                                    className="shadow-inner bg-quaternary--theme
                                    hover:placeholder:text-secondary--theme outline-none 
                                    w-72 xl:w-52 lg:w-full px-4 py-2 rounded-sm text-primary--theme
                                    block" 
                                    placeholder={input.placeholder}
                                    type={input.placeholder} /> 
                                </div>
                            );
                        })
                    }
                    </div>

                    <div className="p-2  w-72 xl:w-52 lg:w-full flex flex-col justify-between">
                        <div className='contacts--page-input relative h-full lg:h-24 rounded-sm overflow-hidden'>
                            <textarea 
                            className="shadow-inner bg-quaternary--theme hover:placeholder:text-secondary--theme
                            outline-none z-10 w-72 xl:w-52 lg:w-full h-full px-4 py-2  text-primary--theme
                            block" placeholder="ваше сообщение" />
                        </div>
                        <div className="flex justify-between mt-3">
                            {/* <Social /> */}
                            <div className="flex items-end hover:text-ternary--theme ">
                                <button type="submit"> отправить </button>
                            </div>
                        </div>
                    </div> 

                    </form>
                </div>





            </div>
        </div>
    )
}
export default Contacts