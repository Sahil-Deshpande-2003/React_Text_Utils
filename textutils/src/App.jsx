import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"
import About from './components/About'
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

    <Navbar mode={mode} toggleMode={toggleMode}/>

    {/* <Textform/> */}

    <About/>
     
    </>
  )
}

export default App
