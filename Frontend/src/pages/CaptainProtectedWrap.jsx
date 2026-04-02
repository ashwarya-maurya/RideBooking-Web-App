import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CaptainProtectedWrap = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if(!token){
            navigate('/captain_login')
        }
    },[token])

  return (
    <>{children}</>
  )
}

export default CaptainProtectedWrap