import React, { useState } from 'react'
import Login from './components/BootStrap';
import Login2 from './components/Login';
import LastLogin from './components/LastLogin'


function App() {
  const [mode, setMode] = useState("light")
  const [head, setHead] = useState()
  const [onboard , setOnboard] = useState()
  const [input, setInput] = useState()
  const [label, setLabel] = useState()
  const [inputColor, setinputColor] = useState()
  const [headColor, setheadColor] = useState()
  const [headColor34, setheadColor34] = useState()
  

  const Dark = () => {
    if(mode === "light"){
      setHead("#252D3C")
      document.body.style.backgroundColor = '#151B28'
      setOnboard("#151B28")
      setInput("#1C2534")
      setLabel("white")
      setinputColor("#333B48")
      setheadColor("#437EF7")
      setheadColor34("#A5ACBA")
      setMode("Dark")
      
    }else{
      setHead("#FAFBFC")
      setOnboard("#FAFBFC")
      document.body.style.backgroundColor = '#FAFBFC'
      setLabel("#272D37")
      setinputColor("white")
      setheadColor("#5F6D7E")
      setheadColor34("#5F6D7E")
      setInput("white")
      setMode("light")

    }
    
  }
  return (
    <>
      {/* <Login /> */}
      {/* <Login2 /> */}
      <LastLogin head_Bottom={head} mode={Dark} onboard={onboard} input={input} inputColor={inputColor} label={label} headColor={headColor} headColor34={headColor34} night={mode}/> 
    </>
  );
}

export default App;
