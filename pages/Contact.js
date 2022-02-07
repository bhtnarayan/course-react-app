import React from 'react';
import { useState } from 'react';
import "../index.css";

const Contact = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
    return (
        <form onSubmit={handleSubmit} className = "contact-form">
          <label>Enter your name:
          <input 
            type="text" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange}
          />
          </label>
          <label>Enter your age:
            <input 
              type="number" 
              name="age" 
              value={inputs.age || ""} 
              onChange={handleChange}
            />
            </label>
    
            <textarea  onChange={handleChange} />
    
            <select value={inputs} onChange={handleChange}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select>
            <input type="submit" />
        </form>
      )
}

export default Contact;

