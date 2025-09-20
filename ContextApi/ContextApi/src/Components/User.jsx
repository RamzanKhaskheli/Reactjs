import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UserContext } from '../utils/Context'

function User() {
  const {user}=useContext(UserContext)
  return (
   <div className='m-auto w-1/2 mt-10'>
        <h1 className='text-5xl mb-2 text-red-200'>User</h1>
        
        <div className='flex w-1/2 flex-col mt-5'>
         {
          user.map((u)=>{
            return <Link key={u.id} className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300' to={`/user/${u.id}`}>{u.username}</Link>
          })
         }
          

        </div>

        <hr />
        <Outlet/>
    </div>
  )
}

export default User