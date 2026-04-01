import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    setpassword('')
    setemail('')
  }

return (
 <div className='w-full h-screen p-5 flex justify-between flex-col '>
        <div>
          <img className='w-20 mb-8'  src='https://freelogopng.com/images/all_img/1659761100uber-logo-png.png' alt='Uber' />
          <form             
          onSubmit={(e)=>{
              submitHandler(e)
            }} >

            <h2 className='text-lg mb-2 font-medium'>What's your email ?</h2>
            <input
            onChange={(e)=>{
              setemail(e.target.value)
            }}
            value={email} 
            className='bg-[#EEEEEE] mb-8 text-lg px-4 py-2 w-full rounded placeholder:text-base outline-none focus:ring-2 focus:ring-black' 
            placeholder='email@example.com' 
            required 
            type='email'/>

            <h2 className='text-lg mb-2 font-medium'>Enter Password</h2>
            <input
            onChange={(e)=>{
              setpassword(e.target.value)
            }} 
            value={password}
            className='bg-[#EEEEEE] mb-8 text-lg px-4 py-2 w-full rounded placeholder:text-base outline-none focus:ring-2 focus:ring-black'
            required 
            type="password" 
            placeholder='password'/>

            <button
            type='submit'
            className='w-full bg-black font-medium text-lg text-white rounded px-4 py-2'>Login</button>

          </form>
          <p className='mt-1  text-center'>Join a fleet? <Link to='/captain_signup' className='text-blue-600'>Register as Captain</Link></p>

        </div>
        <div>
          <Link to='/login' className='border border-gray-400 w-full text-black font-medium text-lg bg-[#EEEEEE] rounded px-4 py-2 flex items-center justify-center'>Sign In as User</Link>
        </div>
      </div>
  )
}

export default CaptainLogin