import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"
import About from './components/About'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Switch ke jagah Routes
function App() {
  const [mode, setMode] = useState('light')

  
  const toggleMode = ()=>{

    if (mode === 'light'){
        console.log("Changing mode to dark")
        setMode('dark')
    }

    else{
      console.log("Changing mode to light")
      setMode('light')
    }

}

  return (
    <>
   <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>

     
     <Routes>
        <Route exact path="/" element={<Textform />} />
        <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />
       
        </Routes>
   

    </Router>
    </>
  )
}

export default App
