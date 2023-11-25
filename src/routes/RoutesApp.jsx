import React from 'react'
import {Routes, Route, Router, useLocation} from 'react-router-dom'

import { RequireAuth } from '../context/RequireAuth'

import Homepage from '../pages/public/Homepage'
import Login from '../pages/public/Login'
import Signup from '../pages/public/Signup'

import Account from '../pages/auth/Account'

import ErrorPage from '../pages/ErrorPage'

const RoutesApp = () => {
  return (
      <Routes>
          <Route index element={<Homepage />} />
      
          <Route path="home" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
      
          <Route
            path="account"
            element={
              <RequireAuth>
                <Account />
              </RequireAuth>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
  )
}

export default RoutesApp