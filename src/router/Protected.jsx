import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {
  const userDataStr = localStorage.getItem('userData')
  const userData = userDataStr ? JSON.parse(userDataStr) : null

  if (!userData) {
    return <Navigate to={'/login'} replace={true} />
  }

  return (
    <div>{children}</div>
  )
}

export default Protected
