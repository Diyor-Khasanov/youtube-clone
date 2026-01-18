import { Bell, Search, User, Menu } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <nav className='flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-3 bg-white shadow-sm gap-4'>

      <div className='flex items-center justify-between w-full md:w-auto'>
        <Link to={'/dashboard'} className='flex gap-2 items-center font-bold text-2xl md:text-3xl lg:text-4xl text-red-600 shrink-0'>
          <img
            src="https://cdn-icons-png.flaticon.com/512/9617/9617325.png"
            alt="youtube logo"
            className='w-10 h-10 md:w-14 md:h-14'
          />
          <h1 className='tracking-tighter'>Red Hamd</h1>
        </Link>

        <div className='flex md:hidden gap-3'>
          <button onClick={() => setShowMobileSearch(!showMobileSearch)} className='bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors shadow-md'>
            <Search size={24} />
          </button>
          <Link
            title="Notifications"
            to={'/notifications'}
            className='bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors shadow-md'
          >
            <Bell size={20} />
          </Link>
          <Link
            title="Profile"
            to={'/profile'}
            className='bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors shadow-md'
          >
            <User size={20} />
          </Link>
        </div>
      </div>

      <div className={`${showMobileSearch ? 'flex' : 'hidden'} md:flex w-full md:w-[40%] lg:w-[500px]`}>
        <form className="group relative flex items-center w-full max-w-[500px]">
          <div className="relative flex border-2 border-gray-200 group-focus-within:border-red-600 w-full pl-5 pr-1.5 py-1.5 rounded-full items-center bg-white transition-colors duration-200">

            <div className="text-gray-400 mr-2 group-focus-within:text-red-600 transition-colors">
              <Search size={18} strokeWidth={2.5} />
            </div>

            <input
              type="text"
              placeholder="Search recipes, meals..."
              className="border-none outline-none flex-1 text-sm md:text-base w-full bg-transparent text-gray-800 placeholder:text-gray-400"
            />
            <button
              onClick={(e) => e.preventDefault()}
              className="bg-red-600 hover:bg-red-700 active:bg-red-800 px-5 py-2 md:px-7 md:py-2.5 rounded-full cursor-pointer text-white font-semibold flex items-center justify-center gap-2 transition-all duration-200"
            >
              <span className="hidden md:block text-sm tracking-wide"><Search size={18} /></span>
              <Search size={18} className="md:hidden" />
            </button>
          </div>
        </form>
      </div>

      <div className='hidden md:flex gap-3 lg:gap-5 items-center'>
        <Link
          title="Notifications"
          to={'/notifications'}
          className='bg-red-600 text-white p-2.5 rounded-full hover:bg-red-700 transition-colors shadow-md'
        >
          <Bell size={20} />
        </Link>
        <Link
          title="Profile"
          to={'/profile'}
          className='bg-red-600 text-white rounded-full p-2.5 hover:bg-red-700 transition-colors shadow-md'
        >
          <User size={20} />
        </Link>
      </div>
    </nav>
  )
}

export default Header
