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
        props.showAlert("Text has been converted to uppercase","success");
        setText(newText);
    }

    const handleLoClick= ()=>{
        // console.log("Uppercase button was clicked");
        let newText=text.toLowerCase();
        props.showAlert("Text has been converted to lowercase","success");
        setText(newText);
    }
    
    const handleClearClick= ()=>{
        setText(" ");
        props.showAlert("Text has been cleared","success");
    }

    const handleCopyClick= ()=>{
        // var text=document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);// Since we are using navigator api here, we don't need the commented out section which is present above and below this line
        // document.getSelection().removeAllRanges();//This will remove the selection of copied texts so that it won't be highlighted when copied.
        props.showAlert("Text has been copied to clipboard!","success");
    }

    const handleExtraSpaces= ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed","success");
        
    }

    const [text, setText]=useState(''); //useState is a hook. text variable will be initialized by whatever is the value present in the useState argument and inorder to change its value, we will have to make use of setText function as we have done with inside handleUpClick function. Here text is a state variable.
    
    // text="new text"; //Wrong way to change the state
    // setText("new text"); //Correct way to change the state
    
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(62 85 155)':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea> 
            {/* In the above line, for style property we are using an object,single bracket indicates that we are using javascript and double brackets indicates that we are using object of javascript */}
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'black' }}>
            <h2>Your text summary</h2>
            {/* Filter function proceeds only when it returns true. Here we have made use of regex to split -> \s which means white spaces including new line.*/}
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p> Approx. read {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} mins </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
