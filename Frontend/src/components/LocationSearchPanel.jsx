import React from 'react'

const LocationSearchPanel = (props) => {

  const locations = [
  "Flat No. 302, Shanti Residency, Sector 15, Rohini, New Delhi, 110089",
  "H.No. 45, Street 8, Laxmi Nagar, New Delhi, 110092",
  "Plot 12, Near Dwarka Metro Station, Sector 10, Dwarka, New Delhi, 110075",
  "Shop 21, Connaught Place, New Delhi, 110001",
  "A-15, Green Park Extension, South Delhi, 110016"
]

 return(
  <div>
    {
      locations.map((elm,idx)=>{
      return <div key={idx} onClick={()=>(
        props.setvehiclePanelOpen(true),
        props.setPanelOpen(false)
        )} className='flex items-center justify-between gap-2 w-full mb-4 rounded-xl border-2 border-white active:border-black p-2'>
         <h3 className='px-3 py-2 bg-[#EEEEEE] rounded-full'>
          <i className="text-xl ri-map-pin-2-fill"></i>
         </h3>
           <h4 className='font-medium' >{elm}</h4>
       </div>
      })
    }
  </div>
  )
}

export default LocationSearchPanel