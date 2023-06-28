import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import DateTimePicker from 'react-datetime-picker'
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'
import { useState } from 'react'
import axios from 'axios'

function Addactivities() {
  // const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const [formData, setFormData] = useState({
    userid: '',
    startTime: new Date(),
    endTime: new Date(),
    name: '',
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    // if (formData.name === '') {
    //   formData.name = 'Work task'
    // }
    console.log('Data sent: ', formData)
    try {
      const config = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
      const response = await axios.post(
        'http://localhost:4001/api/activities',
        formData,
        config
      )
      console.log('Data successfully posted: ', response.data)

      // navigate('/MainPanel')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-1/5'>
      <h2>Register new activity</h2>
      <ul>
        <li className='py-2'>
          <input
            type='text'
            placeholder='User Id'
            id='userid'
            onChange={onChange}
            value={formData.userid}
            className='p-2 w-full'
          />
        </li>
        {/* <li className="py-2">
          <input
            type="text"
            placeholder="Start time"
            id="startTime"
            onChange={onChange}
            value={formData.startTime}
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

        {/* <li className="py-2">
          <input
            type="text"
            placeholder="End Time"
            id="endTime"
            onChange={onChange}
            value={formData.endTime}
            className="p-2 w-full"
          />
        </li> */}
        <li className='py-2'>
          <input
            type='text'
            placeholder='Task name'
            id='name'
            onChange={onChange}
            value={formData.name}
            className='p-2 w-full'
          />
        </li>
        <li>
          <button
            onClick={onSubmit}
            className='w-full text-green-500 hover:border-green-500'
          >
            Register new activity
          </button>
        </li>
        <li>
          <Link to='/mainpanel'>
            <button className='w-full my-8'>{'< '}Go back</button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Addactivities
