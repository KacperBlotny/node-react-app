import { Link } from 'react-router-dom'

function DeleteUser() {
  return (
    <>
      <div>
        <div>Delete user</div>
        <div>
          <input
            type='text'
            placeholder='Input name to delete'
            id='name'
            // onChange={onChange}
            // value={formData.password}
          />
          <button
          //  onClick={onSubmit}
          >
            Wyslij
          </button>
        </div>
        <div>
          <Link to='/mainpanel'>
            <button className='p-2 m-4'>Go back</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default DeleteUser
