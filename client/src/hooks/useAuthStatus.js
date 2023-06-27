import { useState, useEffect } from 'react'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setcheckingStatus] = useState(true)

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
    setcheckingStatus(false)
  }, [token])
  return { loggedIn, checkingStatus }
}
