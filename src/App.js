// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'; // type imrs to get import 
import Alert from './components/Alert';

//We are getting rid of all the routing related code as any other section like about is not adding any value to our application and we want to get rid of unnecessary info before deployment
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

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
      //document.title='TextUtils - dark mode'; //This will change the title to TextUtils - dark mode
      //Below is the implementation of another way people spam websites, where you see you see virus on your computer alerts
      // So the title will change to 'TextUtils is amazing' every 2 secs and to 'Install TextUtils Now' every 1.5 secs
      // setInterval(()=>{
      //   document.title='TextUtils is amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils Now';
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      //document.title='TextUtils - light mode'; // This will change the title to TextUtils - light mode
    }
  }

  return (
   <>

   {/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> */}
   {/* <Navbar/> */}
   <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
     {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* 'exact' keyword below will make sure only when url matches the path exactly, it will be directed to its destination. Otherwise, react matches the path only partially, that is /users --> component 1 and /users/home --> component 2 , both will be directed to /users if we don't use exact keyword(i.e. component 1 will be rendered)  */}
          <Route exact path="/about"> 
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try TextUtils - Enter text below to manipulate strings" mode={mode}/>
          </Route>
        </Switch>
      {/* <About/> */}
   </div>
   </Router>
   
   </>
  );
}

export default App;

