import { CircleX } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center flex-col my-auto h-screen gap-2 font-mono'>
      <h1 className='text-8xl font-bold flex items-center'>
        4<CircleX size={70} />4
      </h1>
      <span className='text-2xl'>Page Not Found</span>
      <Link to={'/'} className='cursor-pointer hover:bg-red-700 bg-red-600 px-4 py-2 text-white font-sans rounded'>Go To Home</Link>
    </div>
  )
}

export default NotFound
