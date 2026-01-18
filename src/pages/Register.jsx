import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    firstname: '',
    lastname: '',
  })

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
        'https://auth-api-z9p7.onrender.com/api/auth/register',
        formData
      )
      alert('REGISTER SUCCESS')
      console.log(res.data)
      navigate('/login')
    } catch (err) {
      console.error(err)
      setError(err.response?.data?.message || 'Register failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50 p-4'>
      <div className='flex flex-col lg:flex-row gap-4 shadow-2xl p-6 md:p-8 w-full max-w-5xl h-auto min-h-[80vh] rounded-xl bg-white'>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-5 p-2 w-full lg:w-1/2'
        >
          <h1 className='text-4xl md:text-6xl text-red-600 text-center font-semibold mb-4'>
            Sign Up
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <TextField
              label="First Name"
              name="firstname"
              required
              fullWidth
              value={formData.firstname}
              onChange={handleChange}
            />
            <TextField
              label="Last Name"
              name="lastname"
              required
              fullWidth
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>

          <TextField
            label="Username"
            name="username"
            required
            fullWidth
            value={formData.username}
            onChange={handleChange}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            required
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            required
            fullWidth
            value={formData.password}
            onChange={handleChange}
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
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Button>

          <div className='flex flex-col sm:flex-row justify-between items-center gap-2 mt-2'>
            <p className='text-gray-600'>Already have account?</p>
            <Link to="/login" className='text-red-600 font-medium hover:underline'>
              Sign In
            </Link>
          </div>
        </form>

        <span className='hidden lg:block bg-red-600 h-full w-1'></span>

        <div className='w-full lg:w-1/2 flex items-center justify-center p-4'>
          <img
            src="https://cdn-icons-png.flaticon.com/512/9617/9617325.png"
            alt="youtube"
            className='w-full max-w-[250px] md:max-w-[400px] object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Register
