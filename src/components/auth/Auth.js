import React from "react"
import { Login } from "./Login"
import { Register } from "./Register"
import "./Auth.css"
import Logo from "../../image/Chorezz (4).png"




export const Auth = ({toggle}) => {
    return (
        <>
            <h1 className="welcome">Welcome to Chorez</h1>
<img src={Logo}></img>
            <div className="authContainer">
                <Login toggle={toggle} />
                <Register toggle={toggle} />
            </div>
        </>
    )
}
