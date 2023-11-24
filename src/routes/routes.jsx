import React from 'react'
import {Routes, Route} from 'react-router-dom'

import { RequireAuth } from '../context/RequireAuth'

import Homepage from '../pages/public/Homepage'
import Account from '../pages/auth/Account'
import ErrorPage from '../pages/404Page'

const RoutesApp = () => {
  return (
    <Routes>
        <Route index element={<Homepage />} />
        <Route path="home" element={<Homepage />} />

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