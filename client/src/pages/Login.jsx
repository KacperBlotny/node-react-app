import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Login() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:4001/api/users/login',
        formData
      )
      console.log('haloooo')
      console.log(response.data)
      console.log(response.data.token)
      localStorage.setItem('token', response.data.token)

      navigate('/MainPanel')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div>Login into System</div>
      <ul>
        <li className='p-4'>
          <input
            type='text'
            placeholder='Imie'
            id='name'
            onChange={onChange}
            value={formData.name}
          />
        </li>
        <li className='p-4'>
          <input
            type='password'
            placeholder='Haslo'
            id='password'
            onChange={onChange}
            value={formData.password}
          />
        </li>
        <li>
          <button onClick={onSubmit}>Wyslij</button>
        </li>
      </ul>
      <Link to='/MainPanel'>
        <button className='p-2 m-4'>Log in</button>
      </Link>
    </div>
  )
}

export default Login
