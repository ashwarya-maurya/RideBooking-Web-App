import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const UserProtectedWrap = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { user, setuser } = useContext(UserDataContext)
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        if(!token){
            navigate('/login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        }).then((response) =>{
            if(response.status === 200){
            const data = response.data
            setuser(data.user)
            setisLoading(false)
            }
        } ).catch((error)=>{
            setisLoading(false)
            localStorage.removeItem('token')
            navigate('/login')
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

export default UserProtectedWrap