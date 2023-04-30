import React from 'react'
import "./Login2.css"
import Account from '../logo/Account.png'
import Billing from '../logo/Billing.png'
import Done from '../logo/Done.png'
import Personal from '../logo/Personal.png'
import Lookscout from '../logo/Lookscout.png'
import Icon from '../logo/Icon.png'
import one from '../logo/1.png'
import two from '../logo/2.png'
import three from '../logo/3.png'
import four from '../logo/4.png'
import LookscoutDark from '../logo/LookscoutDark.png'


function LastLogin(props) {
  return (
    <>
      <body style={{ backgroundColor: props.onboard }}>
        <div className="logo-box">
          <img src={props.night !== "Dark" ? Lookscout : LookscoutDark} alt="Logo" id='Company-logo' />
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
              <input style={{ backgroundColor: props.inputColor, border: props.input }} type="text" placeholder="Enter name" required />
            </div>

            <div className="input-box">
              <label style={{ color: props.label }}>Email</label>
              <input style={{ backgroundColor: props.inputColor, border: props.input }} type="text" placeholder="Email Address" required />
              <span className='info'>Please input real email address</span>
            </div>
            <div className="input-box">
              <div className="column">
                <div>
                  <label style={{ color: props.label }}> Password</label>
                  <input style={{ backgroundColor: props.inputColor, border: props.input }} type="text" placeholder="Enter password" required />
                  <span className='info'>Please Enter your password</span>
                </div>
                <div>
                  <label style={{ color: props.label }}> Confirm Password</label>
                  <input style={{ backgroundColor: props.inputColor, border: props.input }} type="text" placeholder="Enter confirm password" required />
                  <span className='info'>Passwords need to match</span>
                </div>
              </div>
            </div>
            <div className="check-box">
              <input type="checkbox" style={{height:""}}/>
              <label style={{ color: props.label }}>I accept the terms and Privacy Policy</label>
            </div>
          </form>
          <div className="bottom-box" style={{ backgroundColor: props.head_Bottom }}>
            <div className="button-box">
              <button>
                Next
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

export default LastLogin