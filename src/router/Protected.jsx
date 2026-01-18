import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {
  const userDataStr = localStorage.getItem('userData')
  const userData = JSON.parse(userDataStr)
  const token = userData.token

  console.log(token)

  if (!token) {
    return <Navigate to={'/login'} replace={true} />
  }

  return (
    <div>{children}</div>
  )
}

export default Protected
