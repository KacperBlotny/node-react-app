import { Link } from 'react-router-dom'
import LogOutButton from '../components/LogOutButton'

function MainPanel() {
  return (
    <div>
      <h2 className='py-8'>MainPanel</h2>
      <ul>
        <li>
          <Link to='/displayhours'>Display Hours</Link>
        </li>
        <li>
          <Link to='/changehours'>Change Hours</Link>
        </li>
      </ul>
      <LogOutButton />
    </div>
  )
}

export default MainPanel
