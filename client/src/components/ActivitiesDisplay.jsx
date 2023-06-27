import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function DisplayActivites() {
  // Fetch  activities
  const [fetchedData, setFetchedData] = useState([])
  const token = localStorage.getItem('token')

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
          <li>
            {activityid}
            {' | '} {userid} {name}
          </li>
          <li>{starttime}</li>
          <li>{endtime}</li>
        </ul>
      )
    )
  }

  return (
    <>
      <div className='w-1/2'>
        <div>Activities:</div>
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
