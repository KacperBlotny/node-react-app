import { Link } from 'react-router-dom'

function Addactivities() {
  return (
    <>
      Add activities
      <Link to='/mainpanel'>
        <button className='p-2 m-4'>Go back</button>
      </Link>
    </>
  )
}

export default Addactivities
