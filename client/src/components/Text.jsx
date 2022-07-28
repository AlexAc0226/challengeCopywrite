import React from 'react'
import "./text.css"

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addText } from "../redux/actions/index"

function Text() {
  
  const dispatch = useDispatch()
  const info = useSelector(state => state.data)
  const [text, setText] = useState("")

  function handleChange(e) {
    e.preventDefault()
    setText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addText(text))
    setText("")
  }

  return (
    <div className="container">
      <nav className="navbar bg-dark navbar-container">
        <div className="container-fluid container-fluid-navbar">
          <form className="d-flex" role="search" onSubmit={(e) => handleSubmit(e)}>
            <input 
            className="form-control me-2 imp-text" 
            type="text" 
            placeholder="Add text..." 
            aria-label="Search"
            value={text}
            onChange={(e) => handleChange(e)}
            />
            <button className="btn btn-outline-success" type="submit">Add</button>
          </form>
        </div>
      </nav>

      <div className="row container-results">
        <div className="row title-result"><h4>Results</h4></div>
        <div className="row all-item-results">
          {
           info.map((item, index) => {
              return (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 items-result">
                  {item}
                </div>
              )
            }) 
          }
       
        
      </div> 
      </div>
    </div>
  )
}

export default Text