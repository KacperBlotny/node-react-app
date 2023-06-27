import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../UserContext'

function LogOutButton() {
  const { setValue } = useContext(UserContext)

  return (
    <div>
      <Link to='/login'>
        <button
          className='p-2 m-4'
          onClick={() => {
            localStorage.setItem('token', '')
            setValue({ name: 'Please log in' })
          }}
        >
          Log out
        </button>
      </Link>
    </div>
  )
}

export default LogOutButton
