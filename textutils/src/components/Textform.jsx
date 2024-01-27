import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Textform(props) {


    const handleUpClick = ()=>{

        console.log("Uppercase was clicked")
        let new_text = text.toUpperCase();
        setText(new_text)
    }

    const handleDownClick = ()=>{

        console.log("Lowercase was clicked")
        let new_text = text.toLowerCase();
        setText(new_text)
    }


    const handleClearClick = ()=>{

        console.log("Cleartext was clicked")
        setText('')
    }

    const handleOnChange = (event)=>{

        setText(event.target.value)
        console.log("Onchange clicked")
    }

    const [text,setText] = useState('')

  return (
    <div className="d-flex justify-content-center"> {/* Add these classes */}
    <div className="mb-3 text-center">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        <h2>Example textarea</h2>
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8" style={{ height: '400px', width:'1000px' }} onChange={handleOnChange} value={text}
      ></textarea>
      <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upper Case</button>
      <button type="button" className="btn btn-primary  my-2" onClick={handleDownClick}>Convert to Lower Case</button>
      <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
    </div>
  </div>
  )
}

Textform.propTypes = {

}

export default Textform

