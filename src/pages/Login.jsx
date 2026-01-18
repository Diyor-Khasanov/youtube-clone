import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await axios.post(
        'https://auth-api-z9p7.onrender.com/api/auth/login',
        formData
      )
      alert('LOGIN SUCCESS')
      localStorage.setItem('userData', JSON.stringify(res.data))
      navigate('/dashboard')
    } catch (err) {
      console.error(err)
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50 p-4'>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-4 shadow-2xl p-6 md:p-10 min-h-[70vh] w-full max-w-5xl rounded-2xl bg-white'>

        <div className='w-full lg:w-1/2 flex items-center justify-center p-4'>
          <img
            src="https://cdn-icons-png.flaticon.com/512/9617/9617325.png"
            alt="youtube icon"
            className='w-full max-w-[200px] md:max-w-[350px] object-contain'
          />
        </div>

        <span className='hidden lg:block bg-red-600 h-80 w-1'></span>

        <form className='flex flex-col gap-6 p-2 w-full lg:w-1/2' onSubmit={handleSubmit}>
          <h1 className='text-4xl md:text-6xl text-red-600 text-center font-semibold mb-2'>
            Sign In
          </h1>

          <TextField
            required
            fullWidth
            label="Email"
            name='email'
            type='email'
            variant="outlined"
            onChange={handleChange}
            value={formData.email}
          />

          <TextField
            required
            fullWidth
            name='password'
            label="Password"
            type='password'
            variant="outlined"
            onChange={handleChange}
            value={formData.password}
          />

          {error && (
            <p className="text-red-600 text-center text-sm">{error}</p>
          )}

          <Button
            color="error"
            variant="contained"
            type="submit"
            size="large"
            disabled={loading}
            className='py-3'
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>

          <div className='flex flex-col sm:flex-row items-center justify-between gap-2 mt-2 text-sm md:text-base'>
            <p className='text-gray-600'>Don't have account yet?</p>
            <Link to={'/register'} className='text-red-600 font-bold underline'>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
