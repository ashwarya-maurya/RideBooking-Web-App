import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainProtectedWrap = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [isLoading, setisLoading] = useState(true)
    const { captain , setcaptain } = useContext(CaptainDataContext)

    useEffect(() => {
        if(!token){
            navigate('/captain_login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        }).then((response)=>{
          if(response.status === 200){
            const data = response.data
            setcaptain(data.captain)
            setisLoading(false)
          }
        }).catch((error)=>{
          setisLoading(false)
          localStorage.removeItem('token')
          navigate('/captain_login')
        })

    },[token])

    if(isLoading){
      return <div className="h-screen flex items-center justify-center">
                <p>Checking authentication...</p>
            </div>
    }

  return (
    <>
      {children}
    </>
  )
}

export default CaptainProtectedWrap``