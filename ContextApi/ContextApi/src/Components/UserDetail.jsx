import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../utils/Context';

const UserDetail = () => {
  const {user} = useContext(UserContext);
    const {name} = useParams();
    const navigate = useNavigate();
 
    // console.log(user[name].username)
      
    
    
    const GoBackHandler = () =>{
        navigate("/user")
        // navigate(-1)

    }


  return (
    <div className='m-auto w-1/2 mt-10'>
        <h1 className='text-5xl mb-2 text-red-200'>{user[name].username}</h1>
        <h3 className='text-xl mt-3'>{user[name].city}</h3>

        <button onClick={GoBackHandler} className='px-3 py-2 mt-5 bg-red-300 text-white'>Go back</button>
    </div>
  )
}

export default UserDetail