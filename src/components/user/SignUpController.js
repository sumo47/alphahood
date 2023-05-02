import React, { useState, useEffect, useRef } from 'react'
import SignUp from '../user/SignUp'
import Nav from '../Nav'
import axios from 'axios'


function App() {
  const [mode, setMode] = useState("light")
  const [head, setHead] = useState()
  const [onboard, setOnboard] = useState()
  const [input, setInput] = useState()
  const [label, setLabel] = useState()
  const [inputColor, setinputColor] = useState()
  const [headColor, setheadColor] = useState()
  const [headColor34, setheadColor34] = useState()

  const Dark = () => {
    if (mode === "light") {
      setHead("#252D3C")
      document.body.style.backgroundColor = '#151B28'
      setOnboard("#151B28")
      setInput("#1C2534")
      setLabel("white")
      setinputColor("#333B48")
      setheadColor("#437EF7")
      setheadColor34("#A5ACBA")
      setMode("Dark")

    } else {
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
  const [pbutton, setPbutton] = useState("")
  const [button, setButton] = useState("")
  // const [image, setImage] = useState("")
  const [logo, setLogo] = useState("")
  const file = useRef(null);

  useEffect(() => {

    axios.get("http://localhost:3006/getbutton")
      .then((res) => { setPbutton(res.data.message.button); setLogo(res.data.message.image) })
      .catch((e) => { console.log(e.message) })

  }, [logo, button])

  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    // FormData is a built-in JavaScript object that provides a simple way to construct and send an HTTP request that includes form data, such as text inputs, file uploads, and other types of data.
    formData.append('image', file.current.files[0]);
    // console.log(file)

    formData.append('button', button)

    await axios.put('http://localhost:3006/update', formData)
      .then((res) => {
        console.log(res.data.message)
      })
      .catch((e) => {
        console.log(e.message)
      })

    axios.get("http://localhost:3006/getbutton")
      .then((res) => { setPbutton(res.data.message.button); setLogo(res.data.message.image) })
      .catch((e) => { console.log(e.message) })
  }

  return (
    <>
   <div className="Admin-panel">
   <h1>Admin Panel</h1>
   </div>
      <Nav />
      <SignUp
        pbutton={pbutton}
        logo={logo}
        file={file}
        setButton={(e) => { setButton(e.target.value) }}
        submit={submit}
        head_Bottom={head}
        mode={Dark}
        onboard={onboard}
        input={input}
        inputColor={inputColor}
        label={label}
        headColor={headColor}
        headColor34={headColor34}
        night={mode} />
    </>
  );
}

export default App;
