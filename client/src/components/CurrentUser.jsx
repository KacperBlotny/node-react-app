import { useContext } from 'react'
import { UserContext } from '../../UserContext'

function CurrentUser() {
  const { value, setValue } = useContext(UserContext)

  return (
    <div className='fixed top-0 w-screen'>
      <div className='text-xl p-8'>User</div>
      <div>{value.name}</div>
    </div>
  )
}

export default CurrentUser
