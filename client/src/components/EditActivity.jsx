import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function EditActivity() {
  const token = localStorage.getItem('token')

  const [formData, setFormData] = useState({
    userid: '',
    name: '',
    startTime: '',
    endTime: '',
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
      const response = await axios.put(
        'http://localhost:4001/api/activities',
        formData,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )

      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-1/5'>
      <div>Edit activity</div>
      <ul>
        <li className='py-2 pb-8'>
          <input
            type='text'
            placeholder='Input activity id to edit'
            id='activityid'
            onChange={onChange}
            value={formData.activityid}
            className='p-2 w-full'
          />
        </li>
        <li className='py-2'>
          <input
            type='text'
            placeholder='Input user id to edit'
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
            type='text'
            placeholder='Start Time'
            id='startTime'
            onChange={onChange}
            value={formData.startTime}
            className='p-2 w-full'
          />
        </li>
        <li className='py-2'>
          <input
            type='text'
            placeholder='End time'
            id='endTime'
            onChange={onChange}
            value={formData.endTime}
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

export default EditActivity
