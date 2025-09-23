
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { userDelete } from './redux/counterSlice';

function User() {

  const users = useSelector((state)=>state.counter.users);
  const disPatch = useDispatch();

  function Delete(id) {
    disPatch(userDelete(id));
  }

 

  return (
    <>
    {
      users.map((user,index)=>{
         return <li key={user.id}>
              <h1>{user.name}   <span onClick={()=> Delete(index)} style={{color: "red", cursor: "pointer"}}>X</span></h1>
          </li>
      })
    }
   
      
    </>
  )
}

export default User
