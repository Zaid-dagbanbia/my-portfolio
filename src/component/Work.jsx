
import Working from '../assets/projects/workImg.jpeg'
import orderFood from '/order_food.png'
import mobilisation from '/mobilisation.png'
import adminPanel from '/adminPanel.png'


const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>
            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> 
            {/* Grid Item */}
                <div style={{backgroundImage:`url(${orderFood})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 w-full' >
                        <span className='text-xl font-bold text-white tracking-wide text-center block'>

                             CraveBasket: Order, Eat, Repeat.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://food-del-frontend-tybx.onrender.com/" target= "_blank" >
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Zaid-dagbanbia/food-del-frontend" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${mobilisation})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 w-full'>
                        <span className='text-xl font-bold text-white tracking-wide text-center block'>

                        Mobiliation: Journey Packing Assistant.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://mobilisation.onrender.com" target= "_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Zaid-dagbanbia/mobilisation/blob/main/src/App.jsx" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            {/* Grid Item */}
                <div style={{backgroundImage:`url(${adminPanel})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>

                            Administrative Panel
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://food-del-admin-757g.onrender.com/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Zaid-dagbanbia/food-del-admin" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Work
