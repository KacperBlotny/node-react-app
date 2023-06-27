import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext'
// import axios from 'axios'

function CurrentUser() {
  const { value, setValue } = useContext(UserContext)
  const token = localStorage.getItem('token') || null
  console.log(token)

  let showInfo
  if (value.name == 'Please log in') {
    showInfo = false
  } else {
    showInfo = true
  }

  // const [fetchedMe, setFetchedMe] = useState([])

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await axios.get('http://localhost:4001/api/users/me', {
  //       headers: {
  //         Authorization: 'Bearer ' + token,
  //       },
  //     })

  //     setFetchedMe(data)
  //     console.log(fetchedMe.data.name)
  //     setValue(fetchedMe.data.name)
  //   }w
  //   getData()
  // }, [])

  return (
    <div className='fixed top-0 w-screen'>
      <div className='text-x p-8'>
        <ul>
          <li className='flex'>
            {' '}
            <span style={{ display: showInfo ? 'block' : 'none' }}>
              User:{' '}
            </span>{' '}
            <span className='text-indigo-600 px-2'>{value.name}</span>
          </li>
          <li style={{ display: showInfo ? 'block' : 'none' }}>
            <Link to='/login'>
              <p
                className=' my-2 text-xs text-gray-500 hover:text-white'
                onClick={() => {
                  localStorage.setItem('token', '')
                  setValue({ name: 'Please log in' })
                }}
              >
                Change user
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  )
}

export default CurrentUser
