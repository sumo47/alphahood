import React from 'react'
import "./Login2.css"
import Account from '../logo/Account.png'
import Billing from '../logo/Billing.png'
import Done from '../logo/Done.png'
import Personal from '../logo/Personal.png'
import Lookscout from '../logo/Lookscout.png'
import Icon from '../logo/Icon.png'

function Login2() {

    return (
        <div className='OnBoard' style={{ margin: "auto" }}>
            <div className="Logo-box">
                <img src={Lookscout} alt="Company-Logo" id='Company-logo' />
            </div>
            <div className="Stepper-model">
                <div className="contianer" style={{ width: "644px", height: "108px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#FAFBFC", marginTop: "1.7px" }}>
                    <div className="Head" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "552px", height: "60px" }}>
                        <div className="logo" style={{ display: "table" }}>
                            <img className='Head-logo' src={Account} alt="Account" style={{ display: "table", padding: "0 0 8px 10px" }} />
                            <span >Account</span>
                        </div>
                        <div className="logo">
                            <img className='Head-logo' src={Personal} alt="Personal" style={{ padding: "0 0 8px 10px " }} />
                            <span>Personal</span>
                        </div>
                        <div className="logo">
                            <img className='Head-logo' src={Billing} alt="Billing" style={{ padding: "0 0 8px 6px" }} />
                            <span>Billing</span>
                        </div>

                        <div className="logo">
                            <img className='Head-logo' src={Done} alt="Done" style={{ padding: "0 0 8px 2px" }} />
                            <span>Done</span>
                        </div>
                    </div>
                </div>

                <div className="input" style={{ fontFamily: "sans-serif", margin: "32px 48px", display: "" }}>
                    <div className="name" style={{ display: '' }}>
                        <label style={{ display: 'table', margin: "8px 0", color: "#272D37" }} >Name</label>
                        <input type="text" placeholder='Enter Name' aria-required style={{ border: "1px solid #DAE0E6", borderRadius: "6px", height: "46px", width: "545px", outline: "none", fontSize: "1rem", color: "black"}} />
                    </div>
                    <div className="Email" style={{ display: 'table' }}>
                        <label style={{ display: 'table', margin: "24px 0 8px 0", color: "#272D37" }}>Email </label>
                        <input type="text" placeholder='Enter Email address' aria-required style={{ border: "1px solid #DAE0E6", borderRadius: "6px", height: "46px", width: "545px", outline: "none", fontSize: "1rem", color: "black" }} />
                        <span style={{ color: "#5F6D7E", margin: "8px 0 0 0", display: "table" }}>Please input real Email address</span>
                    </div>
                    <div className="password-box" style={{ margin: "24px 0 0 0", display: "flex" }}>
                        <div className="Password" style={{ display: 'table-colume' }}>
                            <label style={{ display: 'table', margin: "0  0 8px 0", color: "#272D37" }}>Password</label>
                            <input type="text" placeholder='Enter Password' aria-required style={{ margin: "0  0 8px 0", border: "1px solid #DAE0E6", borderRadius: "6px", height: "46px", width: "268px", outline: "none", fontSize: "1rem", color: "black" }} /><br />
                            <span style={{ color: "#5F6D7E" }}>Please Enter Your password</span>
                        </div>
                        <div className="Confirm " style={{ display: 'table-colume', margin: "0 0 0 16px" }}>
                            <label style={{ display: 'table', margin: "0  0 8px 0", color: "#272D37" }}>Confirm Password</label>
                            <input type="text" placeholder='Confirm Password' aria-required style={{ margin: "0  0 8px 0", border: "1px solid #DAE0E6", borderRadius: "6px", height: "46px", width: "268px", outline: "none", fontSize: "1rem", color: "#272D37" }} /><br />
                            <span style={{ color: "#5F6D7E" }}>Password should be matched</span>
                        </div>

                    </div>
                    <div className="checkbox" style={{ marginTop: "24px", display: "flex" }}>
                        <input type="checkbox" style={{ width: "20px", height: "24px" }} />
                        <label style={{ color: "#272D37", margin: "5px 0 0px 12px", padding: "0" }}>I accept the terms and Privacy Policy</label>
                    </div>
                </div>
                <div className="bottom" style={{ width: "645px", height: "78px", backgroundColor: "#FAFBFC", margin: "0 0 2px 0" }}>
                    <div className="button" style={{ display: "flex", alignItems: "right", justifyContent: "right" }}>
                        <button style={{ backgroundColor: "#437EF7", color: "#FFFFFF", height: "46px", width: "96px", borderRadius: "6px", margin: "16px 48px", border: "none", fontSize: "15px" }}>
                            Next
                            <img src={Icon} alt="" style={{ margin: "0 0 0 8px", width: "4.65px", height: "10px" }} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login2