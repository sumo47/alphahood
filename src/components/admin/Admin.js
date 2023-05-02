import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Navigate = useNavigate();

    const userLogin = function (event) {
        event.preventDefault();
        axios.post('https://repulsive-foal-flannel-nightgown.cyclic.app/admin', {
            email, password
        })
            .then((res) => {
                alert(`Your Acount Login Succesfully`)
                const token = res.data.token;
                localStorage.setItem("x-api-key", token)
                Navigate('/SignUp')
            }).catch((err) => {
                alert(err.response.data.message + err.response.status + " Error")
            })
    }
    return (
        <>
            <div className="row m-3">
                <div className="col m-5">
                    <form onSubmit={userLogin}><br /><br /><br />
                        <h1>Admin</h1>
                        <input type='email' placeholder="Email id" onChange={((e) => setEmail(e.target.value))} /><br />
                        <input type='password' placeholder="Password" onChange={((e) => setPassword(e.target.value))} /> <br />
                        <input className="btn btn-primary" type="submit" placeholder="SUBMIT" value={"Login"}/><br />
                    </form>
                </div>
            </div>
        </>
    )
}
