import { Button, TextField } from '@mui/material'
import { Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../../public/icons/yt_icon.png'

const Register = () => {
  return (
    <div className='flex items-center justify-center my-auto h-screen'>
      <div className='flex items-center justify-center gap-1 shadow-2xl p-8 h-[80vh] rounded-xl max-w-max'>
        <form className='flex flex-col gap-6 p-4'>
          <h1 className='text-6xl text-red-600 text-center font-semibold font-sans my-4'>Sign Up</h1>
          <TextField
            required
            error
            id="outlined-required"
            label="Email"
            type='email'
            className='w-[500px]'
          />
          <TextField
            required
            error
            id="outlined-required"
            label="Password"
            type='password'
            className='w-[500px]'
          />
          <TextField
            required
            error
            id="outlined-required"
            label="Username"
            className='w-[500px]'
          />
          <TextField
            required
            error
            id="outlined-required"
            label="First Name"
            className='w-[500px]'
          />
          <TextField
            required
            error
            id="outlined-required"
            label="Last Name"
            className='w-[500px]'
          />
          <Button color='error' variant='contained'>Sign Up</Button>

          <div className='flex items-center justify-between'>
            <p>Already have account?</p>
            <Link to={'/login'} className='text-red-600 underline'>
              Sign In
            </Link>
          </div>
        </form>
        <span className='bg-red-600 h-full w-1'></span>
        <div className='w-[500px] flex items-center justify-center'>
          <img src={icon} alt="youtube icon" />
        </div>
      </div>
    </div>
  )
}

export default Register
