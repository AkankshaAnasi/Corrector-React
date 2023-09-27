import React  from 'react'
import {  Link } from 'react-router-dom'



export default function Navbar(props) {
  
  
  
  
    
  return (
    <div> 
       <nav className={`navbar navbar-expand-lg navbar-dark-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <Link className="navbar-brand"  href="/">{props.tittle}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="./About">About</Link>
        </li>
        
        
        </ul>

          <button className="bg-success rounded mx-2" onClick = {() => {props.toggleClick('success')}} style = {{height :'25px', width : '25px'}}/>
        <button className="bg-info rounded mx-2 my-2" onClick = {() => {props.toggleClick('info')}} style = {{height :'25px', width : '25px'}}/>
        <button className="bg-danger rounded mx-2 my-2" onClick = {() => {props.toggleClick('danger')}} style = {{height :'25px', width : '25px'}}/>
        <button className="bg-warning rounded mx-2 my-2" onClick = {() => {props.toggleClick('warning')}} style = {{height :'25px', width : '25px'}}/>
       
        
         
      
    </div>

    


  
  </div>
</nav>
    </div>
  )
}

