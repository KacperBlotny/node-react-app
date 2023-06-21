import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <div>Login into System</div>
      <ul>
        <li className='p-4'>
          <input type='text' />
        </li>
        <li className='p-4'>
          <input type='text' />
        </li>
        <li className='p-4'>
          <input type='text' />
        </li>
      </ul>
      <Link to='/MainPanel'>
        <button className='p-2 m-4'>Log in</button>
      </Link>
    </div>
  )
}

export default Login
