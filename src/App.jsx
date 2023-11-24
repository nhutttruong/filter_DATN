import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter } from 'react-router-dom'

import { AuthContextProvider } from './context/AuthContext'
import RoutesApp from './routes/routes'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <AuthContextProvider>
          <div className='App'>
            <Header/>
            <RoutesApp/>
          </div>

      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
