import React from 'react'
import { useAuth } from '../context/AuthContext'

const ErrorPage = () => {
  const token = useAuth()
  return (
    <div>Nothing here with {token}</div>
  )
}

export default ErrorPage