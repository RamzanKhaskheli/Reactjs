import React, { useContext } from 'react'
import { BioContext } from './Index';

 function Home() {
const name = useContext(BioContext)
  return (
    <div>{name}</div>
  );
}

export default Home;

