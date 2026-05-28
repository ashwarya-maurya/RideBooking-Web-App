import React, { useRef, useState } from 'react'
import CityMap from '../assets/CityMap.png'
import RideComplete from '../components/RideComplete'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainRiding = () => {

  const [rideCompletePanel, setrideCompletePanel] = useState(false)
  const rideCompleteRef = useRef(null)

  useGSAP(()=>{
    if(rideCompletePanel){
      gsap.to(rideCompleteRef.current,{
        translateY: '0%'
      })
    }else{
      gsap.to(rideCompleteRef.current,{
        translateY : '100%'
      })
    }
  },[rideCompletePanel])

  return (
    <div className='h-screen'>

      <div className='h-[88%]'>
        <img src={CityMap} alt="Map" className='h-full w-full object-cover'/>
      </div>

      <div className='h-[12%] flex justify-between items-center w-full bg-yellow-500 p-5'>
        <h3 className='text-lg font-semibold'>Destination<br/>4.5km away</h3>
        <button onClick={()=>{
          setrideCompletePanel(true)
        }} className='bg-green-700 text-white p-2 rounded w-1/2'>Finish Ride</button>
      </div>

      <div ref={rideCompleteRef} className='fixed z-10 bottom-0 w-full translate-y-full bg-white p-5 h-screen'>
        <RideComplete setrideCompletePanel = {setrideCompletePanel} />
      </div>

    </div>
  )
}

export default CaptainRiding