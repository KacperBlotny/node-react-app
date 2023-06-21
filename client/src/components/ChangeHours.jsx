import { Link } from 'react-router-dom'

function ChangeHours() {
  return (
    <>
      Change the hours
      <Link to='/mainpanel'>
        <button className='p-2 m-4'>Go back</button>
      </Link>
    </>
  )
}

export default ChangeHours
