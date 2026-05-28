import React, { useRef, useState } from 'react'
import CityMap from '../assets/CityMap.png'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import RideAccepted from '../components/RideAccepted'

const CaptainHome = () => {

  const [ridePopUpPanel, setridePopUpPanel] = useState(true)
  const ridePopUpRef = useRef(null)

  const [rideAccepted, setrideAccepted] = useState(false)
  const rideAcceptedRef = useRef(null)

  useGSAP(()=>{
    if(ridePopUpPanel){
      gsap.to(ridePopUpRef.current,{
        translateY: '0%'
      })
    }else{
      gsap.to(ridePopUpRef.current,{
        translateY : '100%'
      })
    }
  },[ridePopUpPanel])

  useGSAP(()=>{
    if(rideAccepted){
      gsap.to(rideAcceptedRef.current,{
        translateY: '0%'
      })
    }else{
      gsap.to(rideAcceptedRef.current,{
        translateY : '100%'
      })
    }
  },[rideAccepted])

  return (
    <div className='h-screen'>
        <img className='w-16 fixed left-5 top-4' src='https://freelogopng.com/images/all_img/1659761100uber-logo-png.png' alt='Uber'/>

        <Link to='/captain_logout' className='fixed right-0 flex justify-center items-center rounded-full px-2 py-1 bg-white m-2'>
            <i className='text-2xl ri-logout-box-r-line'></i>
        </Link>

      <div className='h-2/3'>
        <img src={CityMap} alt="Map" className='h-full w-full object-cover'/>
      </div>

      <div className='h-1/3 p-4'>
        <CaptainDetails/>
      </div>

      <div ref={ridePopUpRef} className='fixed z-10 bottom-0 w-full translate-y-full bg-white px-4 py-6 rounded-t-2xl'>
        <RidePopUp setridePopUpPanel = {setridePopUpPanel} setrideAccepted = {setrideAccepted} />
      </div>

      <div ref={rideAcceptedRef} className='fixed z-10 bottom-0 w-full translate-y-full bg-white p-5 h-screen'>
        <RideAccepted setrideAccepted = {setrideAccepted} />
      </div>

    </div>
  )
}

export default CaptainHome