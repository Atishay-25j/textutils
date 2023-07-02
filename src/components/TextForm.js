import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase" ,"success");
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase" ,"success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const clear = () => {
        setText('')
        props.showAlert("Text Cleared" ,"success");
    }
    const speak = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Text spoken" ,"success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        
        navigator.clipboard.writeText(text);

        props.showAlert("Text copied" ,"success");
    }
    const removeExtra = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed successfully" ,"success");
    }
    return (
        <>
            <div className="container my-1">
                <div className="mb-3" style={{color: props.mode==='light'?'black':'white'}}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode==='light'?'white':'#13466e',color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clear}>Clear text</button>
                <button disabled={text.length===0}  onClick={speak} className="btn btn-primary mx-2 my-2 ">Speak</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Handle copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={removeExtra}>Remove Extra space</button>


            </div>
            <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>Your text journey</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read. </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Preview it here!"}</p>
            </div>
        </>

    )
}
