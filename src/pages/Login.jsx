import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, TextField, Paper, Divider, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
      localStorage.setItem('userData', JSON.stringify(res.data))
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full flex items-center justify-center bg-[#fafafa] p-4 md:p-8 font-sans"
    >
      <Paper
        elevation={0}
        className="flex flex-col lg:flex-row-reverse overflow-hidden w-full max-w-5xl min-h-[650px] rounded-[32px] shadow-[0_40px_80px_-20px_rgba(211,47,47,0.15)] border border-gray-100"
      >

        <div className="hidden lg:flex lg:w-1/2 bg-[#d32f2f] relative p-12 flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: `url('https://www.transparenttextures.com')` }}></div>

          <div className="relative z-10">
            <Typography variant="h2" className="text-white font-black leading-tight tracking-tight mb-4">
              Fresh <br /> Flavors <br /> Await You.
            </Typography>
            <div className="w-20 h-1.5 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-[24px] border border-white/20">
              <p className="text-white text-lg font-medium italic">
                "Ready to order your favorite meal? Just log in and we'll handle the rest."
              </p>
              <p className="text-red-100 mt-3 font-bold">— Meal Express Team</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-white p-8 md:p-16 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl font-black text-gray-900 mb-2">Welcome Back</h1>
              <p className="text-gray-500 font-medium">Please enter your details to sign in</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                variant="filled"
                required
                value={formData.email}
                onChange={handleChange}
                InputProps={{ disableUnderline: true, className: "rounded-2xl bg-gray-50 font-medium" }}
                InputLabelProps={{ className: "text-gray-400" }}
              />

              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                variant="filled"
                required
                value={formData.password}
                onChange={handleChange}
                InputProps={{ disableUnderline: true, className: "rounded-2xl bg-gray-50 font-medium" }}
                InputLabelProps={{ className: "text-gray-400" }}
              />

              {error && (
                <motion.div
                  initial={{ x: -10 }} animate={{ x: 0 }}
                  className="bg-red-50 text-[#d32f2f] p-4 rounded-2xl text-sm font-bold border-l-4 border-[#d32f2f]"
                >
                  {error}
                </motion.div>
              )}

              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={loading}
                disableElevation
                sx={{
                  py: 2.2,
                  mt: 2,
                  borderRadius: '18px',
                  backgroundColor: '#d32f2f',
                  fontSize: '1.1rem',
                  fontWeight: '900',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#b71c1c',
                  }
                }}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>

              <div className="pt-8 flex flex-col items-center gap-4">
                <Divider className="w-full" />
                <p className="text-gray-500 font-medium text-center">
                  Don't have an account yet? <br />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block mt-2"
                  >
                    <Link
                      to="/register"
                      className="text-[#d32f2f] font-black text-lg border-b-2 border-[#d32f2f] hover:bg-red-50 px-2 py-1 rounded-t-md transition-all"
                    >
                      Create Account
                    </Link>
                  </motion.div>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Paper>
    </motion.div>
  )
}

export default Login
