import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Register() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
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
    if (formData.role === '') {
      formData.role = 'employee'
    }

    try {
      const response = await axios.post(
        'http://localhost:4001/api/users',
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
            type='email'
            placeholder='Email'
            id='email'
            onChange={onChange}
            value={formData.email}
          />
        </li>
        <li className='p-4'>
          <select
            type='text'
            placeholder='Rola'
            id='role'
            onChange={onChange}
            value={formData.role}
          >
            <option value='employee'>employee</option>
            <option value='manager'>manager</option>
            <option value='CEO'>CEO</option>
          </select>
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
        <button className='p-2 m-4'>Go back</button>
      </Link>
    </div>
  )
}

export default Register
