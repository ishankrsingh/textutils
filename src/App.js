import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'; // type imrs to get import 



function App() {

  const [mode, setMode]=useState('light'); // State variable which will tell us if dark mode is enabled or not
  
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042758';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
   <>

   {/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> */}
   {/* <Navbar/> */}
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
   </div>
   
   
   </>
  );
}

export default App;
