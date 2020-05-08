import React from "react"
import { ChoresProvider } from "./chores/ChoresProvider"
import { TypesProvider } from "./types/TypeProvider"
import ChoresList from "./chores/ChoresList"
import { UsersProvider } from "./users/UserProvider"
import "./Chorez.css"
import { FilterByType } from "./chores/FilterChores"
import { NavLink, Button } from "reactstrap"
import Logo from "../image/Chorezz (4).png"




export default ( {logout} ) => {

    return (
        <>
        <header>
        <img className="logo2" src={Logo}></img>
            <Button className="logout" color="secondary">
            <NavLink onClick={logout}>Logout</NavLink>
            </Button>
        </header>
            <h1>Chorez</h1>
            <UsersProvider>
                <TypesProvider>
                    <ChoresProvider>
                        <FilterByType/>
                        <ChoresList/>
                    </ChoresProvider>
                </TypesProvider>
            </UsersProvider>
        </>
    )
}