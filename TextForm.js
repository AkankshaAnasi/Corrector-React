import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter the text');
    setText("Enter your text here");
  return (
    
    <div>
      
  
  <div className="my-5 mx-5">
    <label for="exampleInputPassword1" className="form-label">Enter your text here</label>
    <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <div>
  <button type="submit" className="btn btn-primary my-2  mx-5">Convert to uppercase</button>
  </div>  
    </div>
  )
};
