import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext'
// import axios from 'axios'

function CurrentUser() {
  const { value, setValue } = useContext(UserContext)
  const token = localStorage.getItem('token')

  useEffect(() => {
    const name = localStorage.getItem('name')
    const role = localStorage.getItem('role')
    setValue({ name: name, role: role, token: token })
  }, [value])

  let showInfo
  if (value.name == 'Please log in' || value.name == '') {
    showInfo = false
  } else {
    showInfo = true
  }

  return (
    <div className='fixed top-0 w-screen'>
      <div className='text-x p-8'>
        <ul>
          <li className='flex'>
            {' '}
            <span style={{ display: showInfo ? 'block' : 'none' }}>
              User:{' '}
            </span>{' '}
            <span className='text-indigo-600 px-2'>{value.name}</span>
          </li>
          <li className='flex'>
            {' '}
            <span style={{ display: showInfo ? 'block' : 'none' }}>
              Role:{' '}
            </span>{' '}
            <span className='text-indigo-600 px-2'>{value.role}</span>
          </li>
          <li style={{ display: showInfo ? 'block' : 'none' }}>
            <Link to='/login'>
              <p
                className=' my-2 text-xs text-gray-500 hover:text-white'
                onClick={() => {
                  localStorage.setItem('token', '')
                  localStorage.setItem('name', '')
                  localStorage.setItem('role', '')
                  setValue({ name: 'Please log in', role: '' })
                }}
              >
                Change user
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  )
}

export default CurrentUser
