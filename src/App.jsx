import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import Header from './components/Header'
import RoutesApp from './routes/RoutesApp'
import Layout from './layout/layout'
function App() {
  
  return (
        <BrowserRouter>
            <AuthContextProvider>
              <Layout/>
              <RoutesApp/>
          </AuthContextProvider>
        </BrowserRouter>
  )
}

export default App
