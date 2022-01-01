import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'; // type imrs to get import 
import Alert from './components/Alert';



function App() {

  const [mode, setMode]=useState('light'); // State variable which will tell us if dark mode is enabled or not
  const [alert, setAlert] = useState(null); //By default alert state is null and also alert is an object here

  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type:type
      })
      // SetTimeOut function below will make the alert dissapear in 1500 ms from the screen
      setTimeout(()=>{
        setAlert(null);
      },1500)
  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042758';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
   <>

   {/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> */}
   {/* <Navbar/> */}
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
   </div>
   
   
   </>
  );
}

export default App;
