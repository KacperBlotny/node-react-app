import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function DisplayUsers() {
  //   const { value, setValue } = useContext(UserContext)
  //   const navigate = useNavigate()

  const [fetchedData, setFetchedData] = useState([])
  const token = localStorage.getItem('token')

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get('http://localhost:4001/api/users', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })

      setFetchedData(data)
    }
    getData()
    // })
  }, [])

  let contentx
  if (fetchedData != '') {
    contentx = fetchedData.data.map(({ userid, name, role, email }) => (
      <ul key={userid} className='flex justify-between'>
        <li>
          {userid} {name}
        </li>
        <li>{role}</li>
        <li>{email}</li>
      </ul>
    ))
  }
  return (
    <>
      <div className='w-3/5 pt-40'>
        <div>Users:</div>
        <div className='overflow-y-scroll h-1/2'>{contentx}</div>
        <div>
          <Link to='/'>
            <button className='w-full my-8'>{'< '}Go back</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default DisplayUsers
