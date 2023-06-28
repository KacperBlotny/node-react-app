import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function DisplayActivites() {
  const navigate = useNavigate()
  const [fetchedData, setFetchedData] = useState([])
  const token = localStorage.getItem('token')

  const role = localStorage.getItem('role')
  useEffect(() => {
    if (role === 'employee') {
      navigate('/')
    }
  }, [])

  function formatDate(dateString) {
    // Create a new Date object
    var date = new Date(dateString)

    // Extract the desired components
    var year = date.getFullYear()
    var month = (date.getMonth() + 1).toString().padStart(2, '0')
    var day = date.getDate().toString().padStart(2, '0')
    var hours = date.getHours().toString().padStart(2, '0')
    var minutes = date.getMinutes().toString().padStart(2, '0')
    var seconds = date.getSeconds().toString().padStart(2, '0')

    // Construct the desired format
    var formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

    // Return the formatted date
    return formattedDate
  }

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get('http://localhost:4001/api/activities', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })

      setFetchedData(data)
    }
    getData()
  }, [])

  // Render activities
  let contentx
  //   let actIds = []
  if (fetchedData != '') {
    contentx = fetchedData.data.map(
      ({ activityid, userid, starttime, endtime, name }) => (
        <ul key={activityid} className='flex justify-between'>
          <li className='min-w-[10%]'>{activityid}</li>
          <li className='min-w-[10%]'>{userid} </li>
          <li className='w-1/5'>{name}</li>
          <li className='w-1/5'>{formatDate(starttime)}</li>
          <li className='w-1/5'>{formatDate(endtime)}</li>
        </ul>
      )
    )
  }

  return (
    <>
      <div className='w-4/5'>
        <div>
          <ul className='flex justify-between font-bold'>
            <li className='min-w-[10%]'>Activity id:</li>
            <li className='min-w-[10%]'>user id:</li>
            <li className='w-1/5'>Name:</li>
            <li className='w-1/5'>Start time:</li>
            <li className='w-1/5'>End time:</li>
          </ul>
        </div>
        {contentx}
        <div>
          <Link to='/'>
            <button className='w-full my-8'>{'< '}Go back</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default DisplayActivites
