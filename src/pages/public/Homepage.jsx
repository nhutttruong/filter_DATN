import React from 'react'
import { useAuth } from '../../context/AuthContext'

import Header from '../../components/Header'

const Homepage = () => {
    const auth = useAuth()  
  return (
    <div>
        <h1>This is homepage</h1>
    </div>
    
  )
}

export default Homepage