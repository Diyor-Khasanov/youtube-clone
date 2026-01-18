import { CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-[70vh]'>
      <CircularProgress color="error" size={60} />
    </div>
  )
}

export default Loading
