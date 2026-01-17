import { Bell, Search, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/logo/light_logo.png'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-6 py-2'>
      <Link to={'/dashboard'}>
        <img src={logo} alt="youtube logo" className='w-[150px] h-[50px]' /></Link>
      <div>
        <form className='flex border border-red-600 w-[480px] pl-6 pr-2 py-1 rounded-3xl'>
          <input type="text" placeholder='Search...' className='border-none outline-none flex-1' />
          <button onClick={(e) => e.preventDefault()} className='bg-red-600 active:bg-red-700 px-6 py-2 rounded-3xl cursor-pointer text-white'>
            <Search />
          </button>
        </form>
      </div>
      <div className='flex gap-4 items-center'>
        <Link to={'/notifications'} className='bg-red-600 text-white p-2 rounded-full active:bg-red-700'>
          <Bell />
        </Link>
        <Link to={'/profile'} className='bg-red-600 text-white rounded-full p-2 active:bg-red-700'>
          <User />
        </Link>
      </div>
    </div>
  )
}

export default Header
