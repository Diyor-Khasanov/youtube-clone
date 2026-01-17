import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {
  const isLoggedIn = true

  if (!isLoggedIn) {
    return <Navigate to={'/login'} replace={true} />
  }

  return (
    <div>{children}</div>
  )
}

export default Protected
