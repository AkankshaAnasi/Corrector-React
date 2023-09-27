import './App.css';
import Navbar from  './components/Navbar' ;
import Input from './components/Input';
import About from './components/About'
import React, {useState} from 'react';
import Alert from './components/Alert' 

import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link
} from "react-router-dom";




function App() {
  

const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);



const showAlert = (message, type)=> {
  setAlert( {
  message : message,
  type : type,
  })           
  setTimeout(() => {
    setAlert(null);
  }, 1500)
  
}

const removeBodyClasses = () =>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
}



 const toggleClick = (cls)=> {
  removeBodyClasses();
  document.body.classList.add('bg-'+cls)
  if (mode === 'light'){
    setMode('light');
  }
  }

 
  
 
  
  return (
    < >
  <Router>
   <Navbar tittle = "Corrections"  about = "about" mode = {mode}  toggleClick = {toggleClick} />
   <Alert alert = {alert}/>
   
   <div>
    
   <Routes>
            <Route exact path='/about' element = { <About/>}>
            
              </Route> {/* exact path is used for giving navigation /exactly good personal choice is to use exact path */}
          
            
          <Route exact path='/' element = { <Input showAlert = {showAlert}/>} >
            
            </Route> 
    </Routes> 
        
         
  
  </div>
  
  </Router>

    
    
    
   
    </>
  );
}



export default App;
