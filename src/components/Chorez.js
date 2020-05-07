import React, { useState } from "react"
import Dashboard from "./Dashboard"
import { Auth } from "./auth/Auth"

export default () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)

    const logout = () => {
        localStorage.removeItem("Chorez_customer")
        toggle()
    }

    return (
        localStorage.getItem("Chorez_customer") ? <Dashboard logout={logout}/> : <Auth toggle={toggle} />
    )
}