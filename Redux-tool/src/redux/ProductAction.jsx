import axios from "axios";
import { getproducts } from "./ProductReducer";

export const asyncgetproducts =()=> async (disPatch,getState)=>{
                // console.log(getState())
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // console.log(response.data)
        disPatch(getproducts(response.data));

    } catch (error) {
        console.log(error)
    }
    

}