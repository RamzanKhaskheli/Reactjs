import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproducts } from './redux/ProductReducer'
import { asyncgetproducts } from './redux/ProductAction'

const Products = () => {
    const {product}  = useSelector((state)=>state.ProductReducer);
    const dispatch = useDispatch()
    // console.log(product)

    
    useEffect(()=>{
        dispatch(asyncgetproducts())
    },[])
    

  return (
    <div>
        {
      product && product.map((p,index)=>{
         return <li key={p.id}>
              <h1>{p.title}   <span onClick={()=> Delete(index)} style={{color: "red", cursor: "pointer"}}>X</span></h1>
          </li>
      })
    }
    </div>
  )
}

export default Products