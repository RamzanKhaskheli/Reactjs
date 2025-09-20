import { createContext } from "react";

export const BioContext = createContext();

const BioProvider = (props)=>{
    const name = "ramzan"
 
    return <BioContext.Provider value={name}>
        {props.children}
    </BioContext.Provider>
}

export default BioProvider;