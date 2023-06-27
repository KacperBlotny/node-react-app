import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function DeleteUser() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token') || null

  const [formData, setFormData] = useState({
    userid: '',
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
      console.log(token)
      const response = await axios.delete(
        'http://localhost:4001/api/users',
        formData,
        {
          config: {
            headers: {
              authorization: 'Bearer ' + token,
            },
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
    <>
      <div className='w-1/5'>
        <div>Delete user</div>
        <div className='py-2'>
          <input
            type='text'
            placeholder='Input id to delete'
            id='userid'
            onChange={onChange}
            value={formData.userid}
            className='p-2 w-full'
          />
        </div>
        <button
          onClick={onSubmit}
          className='w-full text-rose-500 hover:border-rose-500'
        >
          Delete user
        </button>
        <div>
          <Link to='/'>
            <button className='w-full my-8'>{'< '}Go back</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default DeleteUser
