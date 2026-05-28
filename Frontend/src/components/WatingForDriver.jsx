import React from 'react'

const WatingForDriver = (props) => {
  return (
    <div>

        <h5 onClick={()=>{
            props.setwatingForDriver(false)
        }} className='text-center absolute top-0 w-[95%]' ><i className=" text-2xl text-gray-300 ri-arrow-down-wide-line"></i></h5>

        <h4 className='text-2xl font-bold mb-5'>Wating for Driver</h4>

            <div className='flex items-center justify-between mb-5'>
                <img className='h-15' src="https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg" alt="Car" />
                <div className='text-right'>
                    <h2 className='text-lg font-medium'>Driver</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>DL AC 1235</h4>
                    <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                </div>
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

                <div className='flex items-center gap-5 mb-3 p-2'>
                    <div><i className='text-xl ri-cash-fill'></i></div>
                    <div>
                        <h2 className='text-lg font-semibold'>₹193</h2>
                        <p className='text-sm -mt-1 text-gray-600'>Payment Mode : Cash</p>
                    </div>
                </div>

            </div>

        </div>
  )
}

export default WatingForDriver