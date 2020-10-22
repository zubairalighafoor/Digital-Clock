import React, { useState } from 'react';
import './App.css';

const App=()=> {
  let tim=new Date().toLocaleTimeString();
  const [ctime,setCTIME]= useState(tim);
  const Update=()=>{
    tim=new Date().toLocaleTimeString();
    setCTIME(tim);
  }
  setInterval(Update);
  return (
    <>
     <h1>{ctime}</h1>
    </>
  )
}

export default App;
