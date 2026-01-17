import { Button, TextField } from '@mui/material'
import { Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex items-center justify-center my-auto h-screen'>
      <div className='flex items-center justify-center gap-1 shadow-2xl p-8 h-[80vh] rounded-xl max-w-max'>
        <div className='w-[500px] flex items-center justify-center'>
          <Youtube className='text-red-600 w-40 h-40 font-thin' />
        </div>
        <span className='bg-red-600 h-full w-1'></span>
        <form className='flex flex-col gap-6 p-4'>
          <h1 className='text-6xl text-red-600 text-center font-semibold font-sans my-4'>Sign In</h1>
          <TextField
            required
            error
            id="outlined-required"
            label="Email"
            type='email'
            className='w-[500px] rounded-3xl'
          />
          <TextField
            required
            error
            id="outlined-required"
            label="Password"
            type='password'
            className='w-[500px] rounded-3xl'
          />
          <Button color='error' variant='contained'>Sign In</Button>

          <div className='flex items-center justify-between'>
            <p>Already have account?</p>
            <Link to={'/register'} className='text-red-600 underline'>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
