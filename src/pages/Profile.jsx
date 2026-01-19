import { ArrowLeft, Mail, User as UserIcon } from 'lucide-react'
import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Profile = () => {
  const userDataStr = localStorage.getItem('userData')
  const userData = userDataStr ? JSON.parse(userDataStr) : null

  if (!userData) {
    return <Navigate to={'/login'} replace={true} />
  }

  const toCapitalize = (val) => {
    if (!val) return ''
    return val.charAt(0).toUpperCase() + val.slice(1)
  }

  return (
    <div className="min-h-screen bg-zinc-50 relative flex flex-col items-center">
      <div className='bg-red-600 h-[250px] md:h-[350px] lg:h-[400px] w-full'></div>

      <div className='bg-zinc-100 shadow-2xl w-[90%] md:w-[700px] min-h-[400px] md:h-[500px] rounded-3xl p-6 md:p-12 -mt-24 md:-mt-40 mb-10 z-10 flex flex-col items-center'>

        <div className="w-full flex justify-start">
          <Link
            to={'/dashboard'}
            className='flex gap-2 items-center px-4 py-2 bg-white text-red-600 border border-red-600 rounded-xl hover:bg-red-50 transition-all active:scale-95 text-sm md:text-base font-medium shadow-sm'
          >
            <ArrowLeft size={20} /> Go To Dashboard
          </Link>
        </div>

        <h1 className='text-3xl md:text-5xl lg:text-6xl text-center font-bold text-gray-800 mt-10 md:mt-16 wrap-break-words w-full'>
          {toCapitalize(userData.user.firstname)} {toCapitalize(userData.user.lastname)}
        </h1>

        <div className='flex flex-col md:flex-row items-center justify-center mt-8 md:mt-12 gap-4 md:gap-8 w-full border-t border-zinc-200 pt-8'>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-zinc-200 w-full md:w-auto justify-center">
            <UserIcon size={18} className="text-red-600" />
            <span className="text-gray-700 font-medium italic">@{userData.user.username}</span>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-zinc-200 w-full md:w-auto justify-center">
            <Mail size={18} className="text-red-600" />
            <span className="text-gray-700 font-medium">{userData.user.email}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
