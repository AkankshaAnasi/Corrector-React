import React, {useState} from 'react'



export default function Input(props) {
    const handleUpClick = () =>{
        //console.log("Upper clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase Enabled", "success");
    }

    const handleOnChange= (event) =>{
        console.log("on changed");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
      var text = document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copy Enabled", "success");
    }
    
    const handleClear = () =>{
      let newText = " ";
      setText(newText);
      props.showAlert("Clear Enabled", "success");
    }

    const handleSpaces = () => {
      let newText= text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed", "success");

    }

    
    
    const [text, setText] = useState('');

    
    
    
    


  return (
    
   

  <div className="mx-5 my-5">
    <h3 for="exampleFormControlTextarea1" className="form-label my-3">Here I'm to correct you</h3>
  
  <textarea className="form-control" value = {text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="8"> </textarea>
  <button disabled={text.length===0}className = "btn btn-primary mx-1 my-5" onClick={handleUpClick}  >Convert to Uppercase</button>
  <button disabled={text.length===0} className = "btn btn-primary my-5 mx-2" onClick={handleCopy}  >Copy Text</button>
  <button disabled={text.length===0} className = "btn btn-primary my-5 mx-2" onClick={handleSpaces}  >Remove White Spaces</button>
  <button disabled={text.length===0} className = "btn btn-primary my-5 mx-2" id = "clearid" onClick={handleClear}  >Clear</button>
  <h5>Your Summary</h5>
<p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters </p>

<p>
  In {0.008*text.length} minutes characters are  read</p>
  </div>

  )
};
