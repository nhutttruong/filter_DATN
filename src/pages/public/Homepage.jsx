import React from 'react'
import { useAuth } from '../../context/AuthContext'


import SlideShow from '../../components/SlideShow'
const Homepage = () => {
    const auth = useAuth()  
  return (
    <div style={{backgroundColor: "#E6F6F4"}}>
        <h1>This is homepage</h1>
        <SlideShow/>
    </div>
    
  )
}

export default Homepage