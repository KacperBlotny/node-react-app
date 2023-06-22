import { Link } from 'react-router-dom'
function LogOutButton() {
  return (
    <div>
      <Link to='/login'>
        <button className='p-2 m-4'>Log out</button>
      </Link>
    </div>
  )
}

export default LogOutButton
