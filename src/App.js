import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Texbox from './component/Texbox'
import Alert from './component/Alert';
import { useState } from 'react';


function App() {
const [mode , setmode] = useState('light');
const [text , settext] = useState('');
const [modecheak , setmodecheak] = useState('light mode');
const showAlert = (massage ,type) =>{
  settext({
    msg:massage,
    type: type 
  })
    setTimeout(() => {
      settext(null)
    }, 1500);
 
  
}
const togglemode = ()=>{
  if(mode ==='light'){
    setmode('dark');
    document.body.style.backgroundColor = 'rgba(1, 67, 74, 0.662)';
    showAlert("dark mode is on " , "success");
    setmodecheak("dark mode");
  }
  else{
    setmode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode is on " , "success");
    setmodecheak("light mode");
  }
}

  return (
  <>
  <Navbar mode ={mode} togglemode ={togglemode} showAlert = {showAlert} modecheak = {modecheak} />
  <Alert alert = {text}  />
  <Texbox mode = {mode} showAlert = {showAlert}/>
  </>
  );
}

export default App;
