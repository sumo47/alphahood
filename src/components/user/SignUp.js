import React, { useEffect, useState } from 'react'
import "../user/SignUp.css"
import Account from '../logo/Account.png'
import Billing from '../logo/Billing.png'
import Done from '../logo/Done.png'
import Personal from '../logo/Personal.png'
// import Lookscout from '../logo/Lookscout.png'
import Icon from '../logo/Icon.png'
import one from '../logo/1.png'
import two from '../logo/2.png'
import three from '../logo/3.png'
import four from '../logo/4.png'
import LookscoutDark from '../logo/LookscoutDark.png'
import axios from 'axios'


function SignUp(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')
  const [data, setData] = useState([])

  const submit = async (event) => {
    event.preventDefault();

    await axios.post('https://repulsive-foal-flannel-nightgown.cyclic.app/createUser', { name, email, password })
      .then((res) => { console.log(res.data.message) })
      .catch((e) => { console.log(e.message) });

    axios.get('https://repulsive-foal-flannel-nightgown.cyclic.app/getUser')
      .then((res) => { setData(res.data.message) })
      .catch((error) => { console.log(error.message) })
  }

  useEffect(() => {
    axios.get('https://repulsive-foal-flannel-nightgown.cyclic.app/getUser')
      .then((res) => { setData(res.data.message) })
      .catch((error) => { console.log(error.message) })
  }, [])



  return (
    <>
    
      <form onSubmit={props.submit} className="input-box">
        <div className="update-box" style={{ marginLeft: "38px", }}>
          <div className="button" >
            <label htmlFor="" style={{ margin: "1rem" }}> Edit Button</label>
            <input type="text" className='input' onChange={props.setButton} />

          </div>
          <div className="image">
            <label htmlFor="" style={{ margin: "1rem", paddingRight: "43px" }}>Logo</label>
            <input type="file" className="image" ref={props.file} />
          </div>
        </div>

        <input type="submit" className="submit" value={"save"} />
  
      </form>

      <div className="Details">
   
     <div style={{width:"100%", margin:"auto", padding:"20px 50%"}}>
     <h2 style={{}}>Data</h2>
     </div>
    
          {
            data.map((user) => {
              const { name, email } = user
              return  <div className='card' style={{display:"flex", justifyContent:"space-around"}}>
                <p>{name}</p>
                <p>{email}</p>
              </div>
            })
          }
      </div>

      <body style={{ backgroundColor: props.onboard }}>
        <div className="logo-box">
          <img src={props.night !== "Dark" ? props.logo : LookscoutDark} alt="Logo" id='Company-logo' style={{
            width: "180px",
            height: "34px",
            overflow: "hidden"
          }} />
        </div>
        <section className="container" style={{ border: props.onboard }}>
          <div className="Head" style={{ backgroundColor: props.head_Bottom }}>
            <div className="logo">
              <img className='Head-logo' src={props.night !== "Dark" ? Account : one} alt="Account" />
              <span style={{ color: props.headColor }}>Account</span>
            </div>
            <div className="logo">
              <img className='Head-logo' src={props.night !== "Dark" ? Personal : two} alt="Personal" />
              <span style={{ color: props.headColor }}>Personal</span>
            </div>
            <div className="logo">
              <img className='Head-logo' src={props.night !== "Dark" ? Billing : three} alt="Billing" />
              <span style={{ color: props.headColor34 }}>Billing</span>
            </div>
            <div className="logo">
              <img className='Head-logo' src={props.night !== "Dark" ? Done : four} alt="Done" />
              <span style={{ color: props.headColor34 }}>Done</span>
            </div>
          </div>

          <form action="#" className="form" style={{ backgroundColor: props.input }}>
            <div className="input-box">
              <label style={{ color: props.label }}>Name</label>
              <input onChange={(e) => { setName(e.target.value) }} style={{ backgroundColor: props.inputColor, border: props.input, color: props.label }} type="text" placeholder="Enter name" required />
            </div>

            <div className="input-box">
              <label style={{ color: props.label }}>Email</label>
              <input onChange={(e) => { setEmail(e.target.value) }} style={{ backgroundColor: props.inputColor, border: props.input, color: props.label }} type="text" placeholder="Email Address" required />
              <span className='info'>Please input real email address</span>
            </div>
            <div className="input-box">
              <div className="column">
                <div>
                  <label style={{ color: props.label }}> Password</label>
                  <input onChange={(e) => { setPassword(e.target.value) }} style={{ backgroundColor: props.inputColor, border: props.input, color: props.label }} type="text" placeholder="Enter password" required />
                  <span className='info'>Please Enter your password</span>
                </div>
                <div>
                  <label style={{ color: props.label }}> Confirm Password</label>
                  <input style={{ backgroundColor: props.inputColor, border: props.input, color: props.label }} type="text" placeholder="Enter confirm password" required />
                  <span className='info'>Passwords need to match</span>
                </div>
              </div>
            </div>
            <div className="check-box">
              <input type="checkbox" style={{ height: "" }} />
              <label style={{ color: props.label }}>I accept the terms and Privacy Policy</label>
            </div>
          </form>
          <div className="bottom-box" style={{ backgroundColor: props.head_Bottom }}>
            <div className="button-box">
              <button onClick={submit}>
                {props.pbutton}
                <img style={{ marginLeft: "10px" }} src={Icon} alt="" />
              </button>
            </div>
          </div>
        </section>
      </body>
      <button onClick={props.mode}>
        Dark Mode
      </button>
    </>
  )
}

export default SignUp