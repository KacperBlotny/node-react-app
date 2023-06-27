import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function EditUser() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const [formData, setFormData] = useState({
    userid: '',
    name: '',
    email: '',
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
      const response = await axios.put(
        'http://localhost:4001/api/users',
        formData,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )

      console.log(response.data)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-1/5'>
      <div>Edit user</div>
      <ul>
        <li className='py-2'>
          <input
            type='text'
            placeholder='Input id to edit'
            id='userid'
            onChange={onChange}
            value={formData.userid}
            className='p-2 w-full'
          />
        </li>
        <li className='py-2'>
          <input
            type='text'
            placeholder='Name'
            id='name'
            onChange={onChange}
            value={formData.name}
            className='p-2 w-full'
          />
        </li>
        <li className='py-2'>
          <input
            type='email'
            placeholder='Email'
            id='email'
            onChange={onChange}
            value={formData.email}
            className='p-2 w-full'
          />
        </li>
      </ul>
      <button
        onClick={onSubmit}
        className='w-full text-green-500 hover:border-green-500'
      >
        Edit
      </button>
      <div>
        <Link to='/mainpanel'>
          <button className='w-full my-8'>{'< '}Go back</button>
        </Link>
      </div>
    </div>
  )
}

export default EditUser
