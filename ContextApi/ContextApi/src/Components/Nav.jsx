import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
     <nav className="mt-10 flex justify-center gap-10">
            <NavLink style={(e)=>{
             return {
                  color:  e.isActive ? "tomato" : "",
                  fontWeight: e.isActive ? "bold" : ""
             }
            }} to="/">
              Home
            </NavLink>


            <NavLink style={(e)=>{
             return {
                  color:  e.isActive ? "tomato" : "",
                  fontWeight: e.isActive ? "bold" : ""
             }
            }} to="/user">
            User
            </NavLink>


            <NavLink style={(e)=>{
             return {
                  color:  e.isActive ? "tomato" : "",
                  fontWeight: e.isActive ? "bold" : ""
             }
            }} to="/about">
            About
            </NavLink>
            
            <NavLink style={(e)=>{
             return {
                  color:  e.isActive ? "tomato" : "",
                  fontWeight: e.isActive ? "bold" : ""
             }
            }} to="/product">
            Product
            </NavLink>
          </nav>
  )
}

export default Nav