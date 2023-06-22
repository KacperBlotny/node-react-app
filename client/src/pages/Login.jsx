import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import { useContext } from 'react'
import { UserContext } from '../../UserContext'

function Login() {
  const { value, setValue } = useContext(UserContext)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
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
      console.log(formData)
      const response = await axios.post(
        'http://localhost:4001/api/users/login',
        formData
      )

      console.log(response.data)
      localStorage.setItem('token', response.data.token)
      setValue(response.data)
      navigate('/')
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
            type='email'
            placeholder='Email'
            id='email'
            onChange={onChange}
            value={formData.email}
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
      <Link to='/mainpanel'>
        <button className='p-2 m-4'>Log in</button>
      </Link>
    </div>
  )
}

export default Login
