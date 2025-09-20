import React, { useContext } from 'react'
import C from './C'
import { Link } from 'react-router-dom'
import { UserContext } from '../utils/Context'

const B = () => {
  const {user} = useContext(UserContext)

  return (
    <div className=''>
      <h1>User List</h1>
      <div className='m-auto'>
        {
          user.map(u => <Link key={u.id} className='flex bg-red-100 w-20 mb-2'>{u.username}</Link> )
        }
        
      </div>
    </div>
  )
}

export default B