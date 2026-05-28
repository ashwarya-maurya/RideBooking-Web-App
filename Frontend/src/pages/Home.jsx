import React, { useRef, useState } from 'react'
import CityMap from '../assets/CityMap.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingDriver from '../components/LookingDriver'
import WatingForDriver from '../components/WatingForDriver'

const Home = () => {

  const submitHandler = (e) => {
    e.preventDefault()
  }

  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanelOpen, setvehiclePanelOpen] = useState(false)
  const [confirmRidePanelOpen, setconfirmRidePanelOpen] = useState(false)
  const [lookingVehicle, setlookingVehicle] = useState(false)
  const [watingForDriver, setwatingForDriver] = useState(false)

  const panelRef = useRef(null)
  const findTrip = useRef(null)
  const panelClose = useRef(null)
  const vehiclePanle = useRef(null)
  const confirmRidePanle = useRef(null)
  const lookingVehicleRef = useRef(null)
  const watingForDriverRef = useRef(null)

  useGSAP(() => {

    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70vh',
        paddingRight: '15px',
        paddingLeft: '15px',
        paddingTop: '20px',
        paddingBottom: '20px'
      })

      gsap.to(findTrip.current, {
        borderRadius: '0px'
      })

      gsap.to(panelClose.current, {
        opacity: 1
      })

    } else {

      gsap.to(panelRef.current, {
        height: '0vh',
        paddingRight: '0px',
        paddingLeft: '0px',
        paddingTop: '0px',
        paddingBottom: '0px'
      })

      gsap.to(panelClose.current, {
        opacity: 0
      })

      gsap.to(findTrip.current, {
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px'
      })
    }

  }, [panelOpen])

  useGSAP(()=>{
    if(vehiclePanelOpen){
      gsap.to(vehiclePanle.current,{
        translateY: '0%'
      })
    }else{
      gsap.to(vehiclePanle.current,{
        translateY : '100%'
      })
    }
  },[vehiclePanelOpen])

  useGSAP(()=>{
    if(confirmRidePanelOpen){
      gsap.to(confirmRidePanle.current,{
        translateY: '0%'
      })
    }else{
      gsap.to(confirmRidePanle.current,{
        translateY : '100%'
      })
    }
  },[confirmRidePanelOpen])

    useGSAP(()=>{
    if(lookingVehicle){
      gsap.to(lookingVehicleRef.current,{
        translateY: '0%'
      })
    }else{
      gsap.to(lookingVehicleRef.current,{
        translateY : '100%'
      })
    }
  },[lookingVehicle])

    useGSAP(()=>{
    if(watingForDriver){
      gsap.to(watingForDriverRef.current,{
        translateY: '0%'
      })
    }else{
      gsap.to(watingForDriverRef.current,{
        translateY : '100%'
      })
    }
  },[watingForDriver])

  return (
    <div className='h-screen w-screen relative overflow-hidden'>
      <img className='w-18 absolute left-5 top-5' src='https://freelogopng.com/images/all_img/1659761100uber-logo-png.png' alt='Uber'/>

      <div className='h-screen w-screen'>
        <img src={CityMap} alt="Map" className='h-full w-full object-cover'/>
      </div>

      <div className='flex flex-col justify-end h-screen absolute w-full top-0'>

        <div ref={findTrip} className='h-[30vh] bg-white p-6 rounded-t-2xl relative'>
          <i ref={panelClose}
            onClick={() => setPanelOpen(false)}
            className="absolute right-5 top-6 opacity-0 text-3xl ri-arrow-down-wide-fill cursor-pointer"
          ></i>

          <h4 className='text-2xl font-semibold'>Find a trip</h4>

          <form
            onSubmit={(e)=>{
              submitHandler(e)
            }}
            className='flex flex-col'
          >

            <div className='bg-black h-12 w-0.75 rounded-full absolute left-10 top-23.75'></div>

            <input
              onFocus={() => setPanelOpen(true)}
              onChange={(e) => setPickup(e.target.value)}
              value={pickup}
              className='bg-[#EEEEEE] text-base px-12 py-2 mt-5 w-full rounded-lg outline-none focus:ring-2 focus:ring-black'
              type='text'
              placeholder='Add a pick-up location'
            />

            <input
              onFocus={() => setPanelOpen(true)}
              onChange={(e) => setDropoff(e.target.value)}
              value={dropoff}
              className='bg-[#EEEEEE] text-base px-12 py-2 mt-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-black'
              type='text'
              placeholder='Enter your destination'
            />

          </form>
        </div>

        <div ref={panelRef} className='h-0 bg-white overflow-auto'>
          <LocationSearchPanel setvehiclePanelOpen={setvehiclePanelOpen} setPanelOpen={setPanelOpen} />
        </div>

      </div>

    <div ref={vehiclePanle}  className='fixed z-10 bottom-0 translate-y-full w-full bg-white px-4 py-6 rounded-t-2xl'>
      <VehiclePanel setconfirmRidePanelOpen={setconfirmRidePanelOpen} setvehiclePanelOpen={setvehiclePanelOpen}/>
    </div>

    <div ref={confirmRidePanle}  className='fixed z-10 bottom-0 translate-y-full w-full bg-white px-4 py-6 rounded-t-2xl'>
      <ConfirmRide setconfirmRidePanelOpen={setconfirmRidePanelOpen} setvehiclePanelOpen={setvehiclePanelOpen} setlookingVehicle={setlookingVehicle} />
    </div>

    <div ref={lookingVehicleRef}  className='fixed z-10 bottom-0 translate-y-full w-full bg-white px-4 py-6 rounded-t-2xl'>
      <LookingDriver setlookingVehicle={setlookingVehicle}/>
    </div>
    
    <div ref={watingForDriverRef} className='fixed z-10 bottom-0 w-full translate-y-full bg-white px-4 py-6 rounded-t-2xl'>
      <WatingForDriver setwatingForDriver={setwatingForDriver}/>
    </div>

  </div>
  )
}

export default Home