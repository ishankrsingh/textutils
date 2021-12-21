// rfc ->Function based component of react
import React,{useState} from 'react'

export default function TextForm(props) {

   
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);//This will update the value of text variable.
    }
   
    const handleUpClick= ()=>{
        // console.log("Uppercase button was clicked");
        let newText=text.toLocaleUpperCase();
        setText(newText);
    }

    const handleLoClick= ()=>{
        // console.log("Uppercase button was clicked");
        let newText=text.toLowerCase();
        setText(newText);
    }

    const [text, setText]=useState(''); //useState is a hook. text variable will be initialized by 'Enter text here' and inorder to change its value, we will have to make use of setText function as we have done with inside handleUpClick function. Here text is a state variable.
    
    // text="new text"; //Wrong way to change the state
    // setText("new text"); //Correct way to change the state
    
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> 
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-2">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p> Approx. read {0.008 * text.split(" ").length} mins </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
