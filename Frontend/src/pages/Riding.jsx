import React from 'react'
import { Link } from 'react-router-dom'
import CityMap from '../assets/CityMap.png'

const Riding = () => {
  return (
    <div className='h-screen'>

        <Link to='/home' className='fixed right-0 flex justify-center items-center rounded-full px-2 py-1 bg-white m-2'>
            <i className='text-2xl ri-home-5-line'></i>
        </Link>

        <div className='h-[55%]'>
            <img src={CityMap} alt="Map" className='h-full w-full object-cover'/>
        </div>

        <div className='h-auto p-2'>
                <div className='flex items-center justify-between mt-2 mb-5'>
                <img className='h-15' src="https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg" alt="Car" />
                <div className='text-right'>
                    <h2 className='text-lg font-medium'>Driver</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>DL AC 1235</h4>
                    <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                </div>
            </div>

            <div className='w-full'>

                <div className='flex items-center gap-5 border-b mb-3 p-2 border-gray-400'>
                    <div><i className='text-xl ri-square-fill'></i></div>
                    <div>
                        <h2 className='text-lg font-semibold'>Shop 21</h2>
                        <p className='text-sm -mt-1 text-gray-600'>Connaught Place, New Delhi</p>
                    </div>
                </div>

                <div className='flex items-center gap-5 mb-3 p-2'>
                    <div><i className='text-xl ri-cash-fill'></i></div>
                    <div>
                        <h2 className='text-lg font-semibold'>₹193</h2>
                        <p className='text-sm -mt-1 text-gray-600'>Payment Mode : Cash</p>
                    </div>
                </div>
 
            </div>

            <button className='w-full bg-green-800 text-white p-2 rounded' >Make Payment</button>
        </div>

    </div>
  )
}

export default Riding