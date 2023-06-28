import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function DeleteActivities() {
  const navigate = useNavigate()

  const token = localStorage.getItem('token') || null
  const role = localStorage.getItem('role')

  useEffect(() => {
    if (role === 'employee') {
      navigate('/')
    }
  }, [])

  const [formData, setFormData] = useState({
    activityid: '',
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
        'http://localhost:4001/api/activities',

        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
          data: formData,
        }
      )

      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className='w-1/5'>
        <div>Delete activity</div>
        <div className='py-2'>
          <input
            type='text'
            placeholder='Input activity id'
            id='activityid'
            onChange={onChange}
            value={formData.activityid}
            className='p-2 w-full'
          />
        </div>
        <button
          onClick={onSubmit}
          className='w-full text-rose-500 hover:border-rose-500'
        >
          Delete activity
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

export default DeleteActivities
