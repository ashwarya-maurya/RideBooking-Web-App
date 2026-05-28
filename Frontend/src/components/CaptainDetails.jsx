import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div className='flex justify-between items-center rounded-lg p-2 mb-3 bg-orange-500'>
         <div className='flex gap-1 items-center'>
          <img className='w-13 rounded-full' src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'/>
          <h2 className='text-xl font-semibold'>David Singh</h2>
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-center'>₹456.64</h2>
          <p className='text-sm text-center font-thin text-gray-700'>Total Earning</p>
        </div>
       </div>

        <div className='flex items-center justify-between  p-3 bg-gray-300 rounded-lg'>
          <div>
            <i className='text-4xl ri-time-line ml-4'></i>
            <h3 className='text-xl font-semibold text-center'>12</h3>
            <p className='text-xs text-center font-thin text-gray-500'>Hours Online</p>
          </div>

          <div>
            <i className='text-4xl ri-speed-up-line ml-5'></i>
            <h3 className='text-xl font-semibold text-center'>45</h3>
            <p className='text-xs text-center font-thin text-gray-500'>Average Speed</p>
          </div>

          <div>
            <i className='text-4xl ri-booklet-line ml-2'></i>
            <h3 className='text-xl font-semibold text-center'>69</h3>
            <p className='text-xs text-center font-thin text-gray-500'>Total Rides</p>
            
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails