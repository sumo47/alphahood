import React from 'react'
import Account from '../logo/Account.png'
import Billing from '../logo/Billing.png'
import Done from '../logo/Done.png'
import Personal from '../logo/Personal.png'
import Lookscout from '../logo/Lookscout.png'

function Login() {
    return (
        <div className='container mt-5'>

            <div className="container d-flex justify-content-center align-items-center">
                <img src={Lookscout} alt="Company-Logo" className='m-3' />
            </div>

            <div className="  row border" id='head' style={{ backgroundColor: "#FAFBFC" }}>
                <div className="container col ">
                   <div className='container' style={{width:"60px"}}>
                   <img src={Account} alt="" className='p-2'/>
                    <p>Account</p>
                   </div>
                </div>
                <div className="container col">
                   <div className="container" style={{width:"60px"}}>
                   <img src={Personal} alt="" className='p-2' />
                    <p>Personal</p>
                   </div>
                </div>
                <div className="container col">
                <div className="container" style={{width:"60px"}}>
                   <img src={Billing} alt="" className='p-2' />
                    <p>Billing</p>
                   </div>
                </div>
                <div className="container col">
                <div className="container" style={{width:"60px"}}>
                   <img src={Done} alt="" className='p-2' />
                    <p>Done</p>
                   </div>
                </div>
            </div>

            <div className="container" id='bottom'>
                <div className="row">
                    <p>Name</p>
                    <input type="text" name="Name" id="name" />
                </div>
                <div className="row">
                    <p>Email</p>
                    <input type="text" name="Email" id="email" />
                </div>
                <div className="container row">
                    <div className="container col">
                        <p>Password</p>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="container col">
                        <p>Confirm password</p>
                        <input type="text" name="" id="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login