import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
    const location = useLocation()
  return (
    <>
        {
            location.pathname === '/login' || location.pathname === '/signup'
            ?
            null
            :
            <Header/>
        }

    </>
  )
}

export default Layout