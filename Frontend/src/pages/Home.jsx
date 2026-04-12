import React, { useRef, useState } from 'react'
import CityMap from '../assets/CityMap.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {

  const submitHandler = (e) => {
    e.preventDefault()
  }

  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanelOpen, setvehiclePanelOpen] = useState(false)

  const panelRef = useRef(null)
  const findTrip = useRef(null)
  const panelClose = useRef(null)
  const vehiclePanle = useRef(null)

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

    <h5 onClick={()=>{
      setvehiclePanelOpen(false)
    }} className='text-center absolute top-0 w-[95%]' ><i className=" text-2xl text-gray-300 ri-arrow-down-wide-line"></i></h5>

    <h4 className='text-2xl font-bold mb-5'>Choose the Vehicle</h4>


    <div className='border-3 border-white active:border-black flex items-center gap-3 p-4 rounded-2xl mb-3'>

      <img
        className='h-11'
        src="https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg"
        alt="Car"
      />

      <div className='flex-1'>
        <h4 className='text-lg font-semibold'>
          UberGo <span className='text-sm font-normal'><i className="ri-user-3-fill"></i>4</span>
        </h4>
        <h5 className='text-sm'>2 mins away</h5>
        <p className='text-gray-500 text-sm'>Affordable, compact rides</p>
      </div>

      <h4 className='text-lg font-semibold'>₹193</h4>
    </div>


    <div className='border-3 border-white active:border-black flex items-center gap-4 p-4 rounded-2xl mb-3'>

      <img
        className='h-13 px-2.5'
        src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n"
        alt="Moto"
      />

      <div className='flex-1'>
        <h4 className='text-lg font-semibold'>
          Moto <span className='text-sm font-normal'><i className="ri-user-3-fill"></i>1</span>
        </h4>
        <h5 className='text-sm'>3 mins away</h5>
        <p className='text-gray-500 text-sm'>Affordable motorcycle rides</p>
      </div>

      <h4 className='text-lg font-semibold'>₹60</h4>
    </div>


    <div className='border-3 border-white active:border-black flex items-center gap-4 p-4 rounded-2xl'>

      <img
        className='h-18'
        src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9mYzEwMWZmOC04MWExLTQ2YzMtOTk1YS02N2I0YmJkMmYyYmYuanBn"
        alt="Auto"
      />

      <div className='flex-1'>
        <h4 className='text-lg font-semibold'>
          Auto <span className='text-sm font-normal'><i className="ri-user-3-fill"></i>3</span>
        </h4>
        <h5 className='text-sm'>1 mins away</h5>
        <p className='text-gray-500 text-sm'>Affordable auto rides</p>
      </div>

      <h4 className='text-lg font-semibold'>₹100</h4>
    </div>

  </div>

  </div>
  )
}

export default Home