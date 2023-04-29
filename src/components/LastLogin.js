import React from 'react'
import "./Login2.css"
import Account from '../logo/Account.png'
import Billing from '../logo/Billing.png'
import Done from '../logo/Done.png'
import Personal from '../logo/Personal.png'
import Lookscout from '../logo/Lookscout.png'
import Icon from '../logo/Icon.png'


function LastLogin() {
  return (
   <>
    <body>
    <div className="logo-box">
      <img src={Lookscout}  alt="Logo" id='Company-logo' />
    </div>
    <section className="container">
      <div className="Head">
        <div className="logo">
          <img className='Head-logo' src={Account}  alt="Account" />
          <span>Account</span>
        </div>
        <div className="logo">
          <img className='Head-logo' src={Personal} alt="Personal" />
          <span>Personal</span>
        </div>
        <div className="logo">
          <img className='Head-logo' src={Billing} alt="Billing" />
          <span>Billing</span>
        </div>
        <div className="logo">
          <img className='Head-logo' src={Done}  alt="Done" />
          <span>Done</span>
        </div>
      </div>
  
      <form action="#" className="form">
        <div className="input-box">
          <label>Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>
  
        <div className="input-box">
          <label>Email</label>
          <input type="text" placeholder="Enter email address" required />
          <span className='info'>Please input real email address</span>
        </div>
        <div className="input-box address">
          <div className="column">
            <div>
              <label> Password</label>
              <input type="text" placeholder="Enter password" required />
              <span className='info'>Please Enter your password</span>
            </div>
            <div >
              <label> Password</label>
              <input type="number" placeholder="Enter confirm password" required />
              <span className='info'>Passwords need to match</span>
            </div>
          </div>
        </div>
        <div className="check-box">
          <input type="checkbox" />
          <label>I accept the terms and Privacy Policy</label>
        </div>
      </form>
      <div className="bottom-box">
        <div className="button-box">
          <button>
            Next
            <img style={{marginLeft:"10px"}} src={Icon} alt="" />
          </button>
        </div>
      </div>
    </section>
  </body>
   </>
  )
}

export default LastLogin