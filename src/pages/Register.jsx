import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, TextField, Paper, Divider, Typography } from '@mui/material'
import { motion } from 'framer-motion'

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
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await axios.post('https://auth-api-z9p7.onrender.com/api/auth/register', formData)
      alert('Welcome to our community!')
      navigate('/login')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <div className="min-h-screen w-full flex-col flex items-center justify-center gap-3 bg-[#fafafa] p-4 md:p-8 font-sans">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-5xl"
      >
        <Paper
          elevation={0}
          className="flex flex-col lg:flex-row overflow-hidden w-full min-h-[750px] rounded-[32px] shadow-[0_40px_80px_-20px_rgba(211,47,47,0.15)] border border-gray-100"
        >

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex lg:w-1/2 bg-[#d32f2f] relative p-12 flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: `url('https://www.transparenttextures.com')` }}></div>

            <div className="relative z-10">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Typography variant="h2" className="text-white font-black leading-tight tracking-tight mb-4">
                  Delicious <br /> Moments <br /> Start Here.
                </Typography>
                <div className="w-20 h-1.5 bg-white rounded-full"></div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative z-10"
            >
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-[24px] border border-white/20">
                <p className="text-white text-lg font-medium italic">
                  "The best meal application I've ever used. Fresh, fast and reliable."
                </p>
                <p className="text-red-100 mt-3 font-bold">— Chef Michael</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="w-full lg:w-1/2 bg-white p-8 md:p-16 flex items-center">
            <div className="w-full max-w-md mx-auto">
              <motion.div variants={itemVariants} className="mb-10">
                <h1 className="text-4xl font-black text-gray-900 mb-2">Join Us</h1>
                <p className="text-gray-500 font-medium">Create your account to start ordering</p>
              </motion.div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstname"
                    variant="filled"
                    onChange={handleChange}
                    InputProps={{ disableUnderline: true, className: "rounded-2xl bg-gray-50 font-medium" }}
                    InputLabelProps={{ className: "text-gray-400" }}
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastname"
                    variant="filled"
                    onChange={handleChange}
                    InputProps={{ disableUnderline: true, className: "rounded-2xl bg-gray-50 font-medium" }}
                    InputLabelProps={{ className: "text-gray-400" }}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    variant="filled"
                    onChange={handleChange}
                    InputProps={{ disableUnderline: true, className: "rounded-2xl bg-gray-50 font-medium" }}
                    InputLabelProps={{ className: "text-gray-400" }}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    variant="filled"
                    onChange={handleChange}
                    InputProps={{ disableUnderline: true, className: "rounded-2xl bg-gray-50 font-medium" }}
                    InputLabelProps={{ className: "text-gray-400" }}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    variant="filled"
                    onChange={handleChange}
                    InputProps={{ disableUnderline: true, className: "rounded-2xl bg-gray-50 font-medium" }}
                    InputLabelProps={{ className: "text-gray-400" }}
                  />
                </motion.div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-red-50 text-[#d32f2f] p-4 rounded-2xl text-sm font-bold border-l-4 border-[#d32f2f]"
                  >
                    {error}
                  </motion.div>
                )}

                <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    disableElevation
                    sx={{
                      py: 2.2,
                      borderRadius: '18px',
                      backgroundColor: '#d32f2f',
                      fontSize: '1.1rem',
                      fontWeight: '900',
                      textTransform: 'none',
                      '&:hover': { backgroundColor: '#b71c1c' },
                    }}
                  >
                    {loading ? 'Creating Account...' : 'Get Started'}
                  </Button>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-8 flex flex-col items-center gap-4">
                  <Divider className="w-full" />
                  <p className="text-gray-500 font-medium">
                    Already have an account?{' '}
                    <motion.span whileHover={{ scale: 1.1 }} className="inline-block">
                      <Link to="/login" className="text-[#d32f2f] font-black hover:opacity-80 transition-opacity ml-1">
                        Sign In
                      </Link>
                    </motion.span>
                  </p>
                </motion.div>
              </form>
            </div>
          </div>
        </Paper>
      </motion.div>
    </div>
  )
}

export default Register
