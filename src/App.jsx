import React from 'react'
import { Navigate } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navigate to={'/dashboard'} replace={true} />
    </div>
  )
}

export default App
