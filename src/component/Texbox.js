import React , {useState} from 'react'
import './Texbox.css';
function Texbox(props){

    const [text,settext] = useState('Enter your text');
    const ChangeUpperCase = ()=>{
        let newtext = text.toUpperCase();
        settext(newtext)
        props.showAlert("Change upperCase ", "success")
    }
    const ChangeLowerCase =()=>{
      let newtext = text.toLowerCase();
      settext(newtext)
      props.showAlert("Change LowerCase ", "success")
    }
    const RemoveSpace = ()=>{
       let newtext = text.split(/[ ]+/);
      settext(newtext.join(" "));
      props.showAlert("Remove space ", "success")
    }
    const CopyText = ()=>{
      let newtext = document.getElementById("textarea");
      newtext.select();
      navigator.clipboard.writeText(newtext.value);
      props.showAlert("Copy this text", "success")
    }
    const CleanText = ()=>{
      let newtext = "";
      settext(newtext)
      props.showAlert("Clean", "success")
    }
    const [count , setcount] = useState(0);
    const handleonChange = (event)=>{
      settext(event.target.value);
    }


  return (
    <>
        <div className="container"  style = {{color:props.mode==='light'?'black':'white'}}>
            <h1>Enter your Text</h1>
            <textarea  name="" id="textarea" value={text} onChange={handleonChange} cols="100" rows="6" style= {{color:props.mode==='light'?'black':'white' , backgroundColor:props.mode==='light'?'white':'rgba(1, 67, 74, 0.662)'}}
       ></textarea>
            <div className="buttons" style= {{color:props.mode==='light'?'black':'white' ,}}
      >
              <button onClick={ChangeUpperCase}>Upper-Case</button>
              <button onClick={ChangeLowerCase}>Lower-Case</button>
              <button onClick={RemoveSpace}>Remove-Extra-Space</button>
              <button onClick={CopyText}>Copy-text</button>
              <button onClick={CleanText}>Clean</button>
            </div>
            <div className="about-text">
              <h2>About your Text</h2>
              <p>{text.split(/\s+/).length} Words and {text.length} charectors</p>
              <p>{0.008*text.split(" ").length} Minutes to read</p>
            </div>
            <div className="preview">
              <h2>preview</h2>
              <p>{text}</p>
            </div>
        </div>
    </>
  )
}

export default Texbox
