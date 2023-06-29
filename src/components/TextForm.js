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
        text.select();
        navigator.clipboard.writeText(text.value);
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
                <div class="mb-3" style={{color: props.mode==='light'?'black':'white'}}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={clear}>Clear text</button>
                <button  onClick={speak} className="btn btn-primary mx-2 ">Speak</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Handle copy</button>
                <button className="btn btn-primary mx-2" onClick={removeExtra}>Remove Extra space</button>


            </div>
            <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>Your text journey</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 *text.split(" ").length} minutes read. </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something above to preview it here."}</p>
            </div>
        </>

    )
}
