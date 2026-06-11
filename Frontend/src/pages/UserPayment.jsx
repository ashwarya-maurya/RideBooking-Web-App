import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'

const UserPayment = () => {

  const [method, setMethod] = useState('upi')
  const navigate = useNavigate()

  const handlePay = () => {
   alert('Payment Done!')
   navigate('/riding')
  }

  return (
  <div className='min-h-screen w-full bg-white flex flex-col'>

    <div className='flex-1 p-6 flex flex-col justify-between'>

      <div> 
        <Link
          to="/riding"
          className='fixed right-5 top-7 inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-100'
        >
          <i className="ri-arrow-right-line text-xl"></i>
        </Link>

        <h2 className='text-3xl font-bold text-gray-900 mb-1'>
          Payment
        </h2>

        <p className='text-sm text-gray-500 mb-6'>
          Complete your ride payment securely
        </p>

        <div className='bg-gray-100 p-5 rounded-2xl mb-6 flex justify-between items-center'>
          <div>
            <h3 className='font-semibold text-gray-900'>
              Trip Fare
            </h3>

            <p className='text-sm text-gray-500 mt-1'>
              Connaught Place → Dwarka
            </p>
          </div>

          <div className='text-right'>
            <h3 className='text-3xl font-bold text-black'>
              ₹193
            </h3>

            <p className='text-xs text-gray-500'>
              Total
            </p>
          </div>
        </div>

        <h3 className='font-semibold text-gray-800 mb-3'>
          Choose Payment Method
        </h3>

        <div className='flex flex-col gap-3'>

          <div
            onClick={() => setMethod('upi')}
            className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between ${
              method === 'upi'
                ? 'border-black bg-gray-50'
                : 'border-gray-200'
            }`}
          >
            <div>
              <p className='font-medium'>UPI / QR</p>
              <p className='text-xs text-gray-500'>
                Pay using any UPI app
              </p>
            </div>

            <i className='ri-qr-code-line text-xl'></i>
          </div>

          <div
            onClick={() => setMethod('card')}
            className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between ${
              method === 'card'
                ? 'border-black bg-gray-50'
                : 'border-gray-200'
            }`}
          >
            <div>
              <p className='font-medium'>Card</p>
              <p className='text-xs text-gray-500'>
                Debit / Credit Card
              </p>
            </div>

            <i className='ri-bank-card-line text-xl'></i>
          </div>

        </div>

      </div>

      <div className='mt-8'>

        <button
          onClick={handlePay}
          className='w-full bg-black text-white p-4 rounded-2xl font-semibold'
        >
          Pay ₹193
        </button>

        <p className='text-center text-xs text-gray-400 mt-3'>
          Secure payment powered by Ride App
        </p>

      </div>

    </div>

  </div>
)
}

export default UserPayment