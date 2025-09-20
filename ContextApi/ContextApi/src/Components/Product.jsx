import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';


const Product = () => {

    const [product, setProduct] = useState([])
    
    function getProducts(){
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProduct(res.data)
            // console.log(res.data)

        }).catch((err)=>{
            console.log(err)
        })   
    }

    useEffect(() => {
      
        getProducts();
    
      
    }, [])
    



    
    
// getProducts()
   
  return (
    <div className='flex '>
        {/* <button onClick={()=>getProducts()} className="bg-red-100 btn btn-outline btn-primary">Call API</button> */}
        <ul className='p-5 m-auto'>
          {
           product.length > 0 ? product.map(user =>{
                return <li className='p-3 bg-red-200 flex mb-2 w-200' key={user.id}> {user.title}</li>
            }) : <h1 className='text-5xl text-blue-300'>Loading....</h1>
          }
        </ul>

        
    </div>
  )
}

export default Product