import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DateTimePicker from 'react-datetime-picker'
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'

function EditActivity() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  useEffect(() => {
    if (role === 'employee') {
      navigate('/')
    }
  }, [])

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
        {/* <li className="py-2">
          <input
            type="text"
            placeholder="Start Time"
            id="startTime"
            onChange={onChange}
            value={formData.startTime}
            className="p-2 w-full"
          />
        </li>
        <li className="py-2">
          <input
            type="text"
            placeholder="End time"
            id="endTime"
            onChange={onChange}
            value={formData.endTime}
            className="p-2 w-full"
          />
        </li> */}
        <li className='py-2'>
          <DateTimePicker
            value={formData.startTime}
            onChange={(date) =>
              setFormData((prevState) => ({
                ...prevState,
                startTime: date,
              }))
            }
          />
        </li>
        <li className='py-2'>
          <DateTimePicker
            value={formData.endTime}
            onChange={(date) =>
              setFormData((prevState) => ({
                ...prevState,
                endTime: date,
              }))
            }
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
