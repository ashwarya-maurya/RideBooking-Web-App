import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    setpassword('')
    setemail('')
    setfirstname('')
    setlastname('')
  } 

  return (
    <div className='w-full h-screen p-5 flex flex-col'>
        <img className='w-20 mb-6' src='https://freelogopng.com/images/all_img/1659761100uber-logo-png.png' alt='Uber' />
        <form 
          onSubmit={(e) => { 
          submitHandler(e) 
          }}>
            <div>
                <h2 className='text-lg mb-2 font-medium'>What's your name</h2>
                <div className='flex gap-2'>
                    <input 
                    onChange={(e) => { setfirstname(e.target.value) }}
                    type="text" 
                    required value={firstname} 
                    placeholder='First name'
                    className='bg-[#EEEEEE] mb-5 text-lg px-4 py-2 w-full md:w-1/2 rounded placeholder:text-base outline-none focus:ring-2 focus:ring-black' 
                    />
                    
                    <input 
                    onChange={(e) => { setlastname(e.target.value) }}
                    value={lastname}
                    type="text" 
                    placeholder='Last name'
                    className='bg-[#EEEEEE] mb-5 text-lg px-4 py-2 w-full md:w-1/2 rounded placeholder:text-base outline-none focus:ring-2 focus:ring-black' 
                    />
                </div>

                <h2 className='text-lg mb-2 font-medium'>What's your email</h2>
                <input 
                onChange={(e) => { setemail(e.target.value) }}
                value={email} 
                placeholder='email@example.com' 
                required 
                type='email'
                className='bg-[#EEEEEE] mb-5 text-lg px-4 py-2 w-full rounded placeholder:text-base outline-none focus:ring-2 focus:ring-black' 
                />

                <h2 className='text-lg mb-2 font-medium'>Enter Password</h2>
                <input 
                onChange={(e) => { setpassword(e.target.value) }}
                value={password} 
                required 
                type="password" 
                placeholder='password'
                className='bg-[#EEEEEE] mb-5 text-lg px-4 py-2 w-full rounded placeholder:text-base outline-none focus:ring-2 focus:ring-black' 
                />

                <h2 className='text-lg mb-2 font-medium'>Vehicle Information</h2>
                <div className='flex gap-2'>
                    <input 
                    required 
                    placeholder='Vehicle Color' 
                    type="text"
                    className='bg-[#EEEEEE] mb-3 text-lg px-4 py-2 w-full md:w-1/2 rounded placeholder:text-base outline-none focus:ring-2 focus:ring-black' 
                    />
                    <input 
                    required 
                    placeholder='Vehicle Plate' 
                    type="text"
                    className='bg-[#EEEEEE] mb-3 text-lg px-4 py-2 w-full md:w-1/2 rounded placeholder:text-base outline-none focus:ring-2 focus:ring-black' 
                    />
                </div>

                <div className='flex gap-2'>
                    <input 
                    required 
                    placeholder='Seating capacity' 
                    type="number"
                    className='bg-[#EEEEEE] mb-8 text-lg px-4 py-2 w-full md:w-1/2 rounded outline-none focus:ring-2 focus:ring-black' 
                    />
                    <select required
                        className='bg-[#EEEEEE] mb-8 text-base px-4 py-2 w-full md:w-1/2 rounded outline-none focus:ring-2 focus:ring-black'>
                        <option value=''>Vehicle Type</option>
                        <option value='Car'>Car</option>
                        <option value='Bike'>Bike</option>
                        <option value='Auto'>Auto</option>
                    </select>
                </div>
            </div>

            <div>
                <button 
                type='submit'
                className='w-full bg-black font-medium text-lg text-white rounded px-4 py-3 mb-1'>Create Captain Account</button>
                <p className='text-center text-base'>Already have account? <Link to='/captain_login' className='text-blue-600'>Login here</Link></p>
            </div>
        </form>
    </div>
  )
}

export default CaptainSignup