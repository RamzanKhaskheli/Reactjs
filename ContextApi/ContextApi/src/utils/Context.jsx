import React, { createContext, useState } from 'react'

export const UserContext = createContext();

function Context(props) {

  const [user, setuser] = useState([
  { id: 0, username: "ramzan", city: "Karachi" },
  { id: 1, username: "ali123", city: "Lahore" },
  { id: 2, username: "sara_k", city: "Islamabad" },
  { id: 3, username: "ahmed", city: "Hyderabad" }
]
  )

  return <UserContext.Provider value={{user , setuser}}>{props.children}</UserContext.Provider>
}

export default Context