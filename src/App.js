import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
// import TextForm from './components/TextForm';


function App() {
  return (
   <>

   {/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> */}
   {/* <Navbar/> */}
   <Navbar title="TextUtils"/>
   <div className="container my-3">
      {/* <TextForm heading="Enter the text to analyze below"/> */}
      <About/>
   </div>
   
   
   </>
  );
}

export default App;
