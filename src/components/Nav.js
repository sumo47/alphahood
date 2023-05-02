import React from 'react'
import { useNavigate } from 'react-router-dom'




export default function Nav() {
    const Navigate = useNavigate()

    const logout = function () {
        alert("Logout successfully!")
        localStorage.removeItem("x-api-key")
        Navigate('/')
    }

    return (
        <>
            <div className="continer">
               
                <button className="btn btn-outline-danger" type="submit" onClick={logout} style={{background:"hsl(0, 92%, 60%)"}}>Logout</button>
               
            </div> </>)
}