import React from 'react'

const RightCardContent = (props) => {
     console.log(props.color);
  return (
   <div className='absolute top-0 lef-0 h-full w-full p-6 flex flex-col justify-between'>
               <h2 className='bg-white text-xl font-semibold rounded-full h-11 w-11  flex justify-center items-center'>{props.id+1}</h2>
               <div>
                <p className='text-lg leading-relaxed text-white mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi sed enim quod nulla reprehenderit id?</p>
                <div className='flex items-center justify-between'>
                  <button style={{backgroundColor:props.color}}className='text-white font-medium  px-6 py-2 rounded-full'>{props.tag}</button>
                  <button style={{backgroundColor:props.color}}className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
               </div>
       </div>
   )
}

export default RightCardContent
