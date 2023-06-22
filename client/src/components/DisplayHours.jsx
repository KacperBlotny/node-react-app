import { Link } from 'react-router-dom'

function DisplayHours() {
  return (
    <>
      <div>
        <div>Hell these are the hours </div>
        <div>
          <Link to='/mainpanel'>
            <button className='p-2 m-4'>Go back</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default DisplayHours
