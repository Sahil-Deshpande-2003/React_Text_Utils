import React, { StrictMode } from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {


  return (
    <div>

<nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'light':'dark'} bg-${props.mode==='light'?'light':'dark'}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Textutils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>    
      </ul>
      {/* color className me dena hamesha */}




      <div className={`form-check form-switch bg-${props.mode==='light'?'light':'dark'}`}> 
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className={`form-check-label ${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
</div>

    </div>
  </div>
</nav>
      
    </div>
  )
}

Navbar.propTypes = {

}



export default Navbar



