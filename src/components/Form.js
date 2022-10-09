import React from 'react'
import '../App.css'

const Form =(props)=>{
    return (
      <form onSubmit={props.getWeather} className="form">
            <input  type="text" name="city" placeholder='Enter The City Please.........'/> 
            <input type="text" name="country" placeholder='Enter The Country Please .........'/> 
            <button>Get Weather</button>
      </form>
    )
}

export default Form
