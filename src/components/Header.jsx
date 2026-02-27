import { Bell, Search, User, Menu, LogOut } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/imageSlice";
import SearchForm from './SearchForm';

const Header = () => {
  const navigate = useNavigate()
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const dispatch = useDispatch()

  const handleLogOut = () => {
    localStorage.removeItem('userData')
    navigate('/login')
  }

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

          <button onClick={handleLogOut} className="bg-red-600 text-white rounded-full p-2.5 hover:bg-red-700 transition-colors shadow-md">
            <LogOut size={20} />
          </button>
        </div>
      </div>

      <div className={`${showMobileSearch ? 'flex' : 'hidden'} md:flex w-full md:w-[40%] lg:w-[500px]`}>
        <SearchForm />
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

        <button onClick={handleLogOut} className="bg-red-600 text-white rounded-full p-2.5 hover:bg-red-700 transition-colors shadow-md">
          <LogOut size={20} />
        </button>
      </div>
    </nav>
  )
}

export default Header
