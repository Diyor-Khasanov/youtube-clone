import React from 'react'
import { BellOff, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Notifications = () => {
  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-10'>
      <div className='max-w-4xl mx-auto mb-6 flex items-center justify-between'>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>Notifications</h1>
        <Link to="/dashboard" className='flex items-center gap-1 text-red-600 hover:underline'>
          <ArrowLeft size={20} /> Back
        </Link>
      </div>

      <div className='max-w-4xl mx-auto'>
        <div className='bg-white shadow-md rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center border border-gray-100'>

          <div className='bg-gray-100 p-6 rounded-full mb-4'>
            <BellOff size={48} className='text-gray-400' />
          </div>

          <h2 className='text-xl md:text-2xl font-semibold text-gray-700 text-center'>
            No Notifications available
          </h2>

          <p className='text-gray-500 text-center mt-2 max-w-sm'>
            You don't have any notifications yet. New messages will appear here.
          </p>

          <Link
            to="/dashboard"
            className='mt-8 bg-red-600 text-white px-8 py-2.5 rounded-full hover:bg-red-700 transition-colors shadow-lg active:scale-95'
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Notifications
