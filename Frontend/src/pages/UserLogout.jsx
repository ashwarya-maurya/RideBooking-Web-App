import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useEffect } from 'react'

const UserLogout = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if(response.status === 200){
                localStorage.removeItem('token')
                navigate('/login')
            }
        })
    }, [])

    return <></>
}

export default UserLogout