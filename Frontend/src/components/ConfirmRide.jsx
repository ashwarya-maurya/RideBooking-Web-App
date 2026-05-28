import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
            props.setconfirmRidePanelOpen(false)
        }} className='text-center absolute top-0 w-[95%]' ><i className=" text-2xl text-gray-300 ri-arrow-down-wide-line"></i></h5>

        <h4 className='text-2xl font-bold mb-5'>Confirm your Ride</h4>

        <div className='flex flex-col justify-center items-center'>
            <img className='h-20 mb-5' src="https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg" alt="Car" />

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

                <div className='flex items-center gap-5 mb-3 p-2'>
                    <div><i className='text-xl ri-cash-fill'></i></div>
                    <div>
                        <h2 className='text-lg font-semibold'>₹193</h2>
                        <p className='text-sm -mt-1 text-gray-600'>Payment Mode : Cash</p>
                    </div>
                </div>

            </div>
            <button onClick={()=>{
                props.setlookingVehicle(true)
                props.setconfirmRidePanelOpen(false)
                props.setvehiclePanelOpen(false)
            }} 
            className='w-full bg-green-700 text-white p-2 rounded'>Confirm Ride</button>
        </div>
    </div>
  )
}

export default ConfirmRide