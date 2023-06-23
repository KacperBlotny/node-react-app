import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function EditUser() {
  return (
    <div>
      <div>EditUser</div>
      <ul>
        <li>
          <input type='text' />
          ID
        </li>
        <li>
          <input type='text' />
          Name
        </li>
        <li>
          <input type='text' />
          Email
        </li>
      </ul>
    </div>
  )
}

export default EditUser
