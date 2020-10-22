import React, { useState } from 'react';
import './App.css';

const App=()=> {
  let tim=new Date().toLocaleTimeString();
  let dat=new Date().toLocaleDateString();
  const [ctime,setCTIME]= useState(tim);
  const [cDated,setDated]= useState(dat);
  const Update=()=>{
    tim=new Date().toLocaleTimeString();
    setCTIME(tim);
    dat=new Date().toLocaleDateString();
    setDated(dat);
  }
  setInterval(Update);
  return (
    <>
     <h1>{ctime}</h1>
     <h1>{cDated}</h1>
    </>
  )
}

export default App;
