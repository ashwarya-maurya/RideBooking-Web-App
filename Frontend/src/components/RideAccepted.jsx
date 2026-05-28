import React from 'react'
import { Link } from 'react-router-dom'

const RideAccepted = (props) => {

    const submitHandler = (e)=>{
        e.preventDefault()
    }

  return (
    <div>
        <h4 className='text-2xl font-bold mb-5'>Ride Accepted!</h4>

        <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center justify-between w-full p-2 rounded-lg mb-2 border-3 border-yellow-500 '>
                <div className='flex gap-1 items-center'>
                    <img className='w-15 h-15 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6SccWXtO5el1MJFP_JcVKd1z-FKqBEZm6NQ&s" alt="User"/>
                    <p className='text-xl font-semibold'>Harshita</p>
                </div>
                <p className='text-xl font-semibold'>2.2 Km</p>
            </div>

            <div className='w-full'>

                <div className='flex items-center gap-5 border-b mb-3 p-2 border-gray-400'>
                    <div><i className='text-xl ri-map-pin-4-fill'></i></div>
                    <div>
                        <h2 className='text-lg font-semibold'>Shop 21</h2>
                        <p className='text-sm -mt-1 text-gray-600'>Connaught Place, New Delhi</p>
                    </div>
                </div>

                <div className='flex items-center gap-5 border-b mb-3 p-2 border-gray-400'>
                    <div><i className='text-xl ri-square-fill'></i></div>
                    <div>
                        <h2 className='text-lg font-semibold'>Shop 21</h2>
                        <p className='text-sm -mt-1 text-gray-600'>Connaught Place, New Delhi</p>
                    </div>
                </div>

                <div className='flex items-center gap-5 mb-5 p-2'>
                    <div><i className='text-xl ri-cash-fill'></i></div>
                    <div>
                        <h2 className='text-lg font-semibold'>₹193</h2>
                        <p className='text-sm -mt-1 text-gray-600'>Payment Mode : Cash</p>
                    </div>
                </div>

            </div>

            <form className='w-full' onSubmit={(e)=>{
                submitHandler(e)
            }}>

                <input className='w-full text-lg font-mono rounded p-4 mt-2 mb-5 bg-gray-300' type="text" placeholder='Enter OTP here...' />

                <div className='flex gap-2'>
                <Link to='/confirm_ride' className='text-center w-1/2 bg-green-700 text-white p-2 rounded'>Confirm</Link>

                <button onClick={()=>{
                    props.setrideAccepted(false)
                }} 
                className='w-1/2 bg-red-700 text-white p-2 rounded'>Cancel</button>
                </div>
 
            </form>

        </div>
    </div>
  )
}

export default RideAccepted