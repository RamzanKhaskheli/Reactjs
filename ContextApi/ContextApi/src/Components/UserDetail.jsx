import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {
    const {name} = useParams();
    const navigate = useNavigate();
    
    const GoBackHandler = () =>{
        // navigate("/user")
        navigate(-1)

    }


  return (
    <div className='m-auto w-1/2 mt-10'>
        <h1 className='text-5xl mb-2 text-red-200'>UserDetail</h1>
        <h1 className='text-3xl mt-3'>Hi, {name}</h1>
        <button onClick={GoBackHandler} className='px-3 py-2 mt-5 bg-red-300 text-white'>Go back</button>
    </div>
  )
}

export default UserDetail