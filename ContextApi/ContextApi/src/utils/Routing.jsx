import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import User from '../Components/User'
import About from '../Components/About'
import UserDetail from '../Components/UserDetail'
import Product from '../Components/Product'
import A from '../Components/A'
import B from '../Components/B'
import C from '../Components/C'

const Routing = () => {
  return (
    <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/user" element={<User/>}>
                <Route path="/user/:name" element={<UserDetail/>}/>
                
                </Route>
                <Route path="/about" element={<About/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/a" element={<A/>}/>
                <Route path="/b" element={<B/>}/>
                <Route path="/c" element={<C/>}/>
          </Routes>
  )
}

export default Routing