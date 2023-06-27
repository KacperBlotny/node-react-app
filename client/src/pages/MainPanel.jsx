import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import axios from 'axios'

function MainPanel() {
  return (
    <div>
      <div className='flex'>
        <div>
          <h2>Users operations</h2>
          <ul>
            <li>
              <Link to='/displayusers'>Display users</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/edituser'>Edit User</Link>
            </li>
            <li>
              <Link to='/deleteuser'>Delete User</Link>
            </li>
          </ul>
        </div>
        <div className='px-16'>
          <h2>Activities operations</h2>
          <ul>
            {' '}
            <li>
              <Link to='/activitiesdisplay'>Display activities</Link>
            </li>
            <li>
              <Link to='/addactivities'>Add activities</Link>
            </li>
            <li>
              <Link to='/deleteactivities'>Delete activities</Link>
            </li>
            <li>
              <Link to='/editactivity'>Edit activities</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MainPanel
