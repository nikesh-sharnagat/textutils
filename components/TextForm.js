import React, { useState } from "react";

export default function TextForm(props) {
const [text, setText] = useState("");
const HandleUpClick =()=>{
   // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  
}
const HandleLoClick =()=>{
    let newText = text.toLowerCase();
    setText(newText)
  
}

const HandelOnchange =(event)=>{
  setText(event.target.value);
}

const HandleClearClick =()=>{
    let newText = '';
    setText(newText)
  
}
const HandleCopyClick = (e) => {
  setText(e.target.value);
 
}
  return (
    <>
    <div className="container">
  
      <h2>{props.Heading}</h2>

      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={HandelOnchange} id="MyBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={HandleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={HandleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={HandleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={HandleCopyClick}>Copy Text</button>
     
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").length} Minutes Read 👍👍</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
