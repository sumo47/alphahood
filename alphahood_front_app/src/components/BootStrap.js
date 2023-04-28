import React from 'react'
import Account from '../logo/Account.png'
import Billing from '../logo/Billing.png'
import Done from '../logo/Done.png'
import Personal from '../logo/Personal.png'
import Lookscout from '../logo/Lookscout.png'

function Login() {
    return (
        <div className='container mt-5 d-flex align-items-center justify-content-center'>
            <div className='container' style={{width:"648px"}}>

                <div className=" d-flex justify-content-center align-items-center">
                    <img src={Lookscout} alt="Company-Logo" className='m-3' />
                </div>

                <div className="row border" id='head' style={{ backgroundColor: "#FAFBFC" }}>
                    <div className="container col ">
                        <div className='container' style={{ width: "60px", height: "32px" }}>
                            <img src={Account} alt="" className='p-2' />
                            <p>Account</p>
                        </div>
                    </div>
                    <div className="container col">
                        <div className="container" style={{ width: "60px" }}>
                            <img src={Personal} alt="" className='p-2' />
                            <p>Personal</p>
                        </div>
                    </div>
                    <div className="container col">
                        <div className="container" style={{ width: "60px" }}>
                            <img src={Billing} alt="" className='p-2' />
                            <p>Billing</p>
                        </div>
                    </div>
                    <div className="container col">
                        <div className="container" style={{ width: "60px" }}>
                            <img src={Done} alt="" className='p-2' />
                            <p>Done</p>
                        </div>
                    </div>
                </div>

                <div className="container" id='input' style={{backgroundColor:"#FFFFFF"}}>
                    <div className="row" >
                        <p className='' style={{margin:"32px auto 8px auto",paddingLeft:"0px"}}>Name</p>
                        <input type="text" name="Name" id="name" placeholder='Name' />
                    </div>
                    <div className="row">
                        <p className='' style={{margin:"24px auto 8px auto",paddingLeft:"0px"}}>Email</p>
                        <input type="text" name="Email" id="email" placeholder='Email Address' />
                        <p style={{color:"#5F6D7E",paddingLeft:"0", marginTop:"2px"}}>Please Enter real Email address</p>
                    </div>
                    <div className="container row">
                        <div className="container col">
                            <p>Password</p>
                            <input type="text" name="" id="" placeholder='Password' />
                        </div>
                        <div className="container col">
                            <p>Confirm password</p>
                            <input type="text" name="" id="" placeholder='Confirm Password' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login