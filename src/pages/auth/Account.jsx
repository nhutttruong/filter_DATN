import React from 'react'

const Account = () => {
  const auth = useAuth()
  return (
    <>
      <h2>Account (Protected)</h2>
      <div>Authenticated as {auth.token}</div>
    </>
    
  )
}

export default Account