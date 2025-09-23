import React from 'react'
import {Link, Route, Routes} from "react-router-dom";
import User from './User';
import Home from './Home';
import Products from './Products';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>
      <hr />

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<User/>}/>
          <Route path='/products' element={<Products/>}/>
      </Routes>

      
    </div>
  )
}

export default App