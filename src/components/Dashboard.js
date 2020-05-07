import React from "react"
import { ChoresProvider } from "./chores/ChoresProvider"
import { TypesProvider } from "./types/TypeProvider"
import ChoresList from "./chores/ChoresList"
import { UsersProvider } from "./users/UserProvider"
import "./Chorez.css"
import { FilterByType } from "./chores/FilterChores"
import { NavLink, Button } from "reactstrap"




export default ( {logout} ) => {

    return (
        <>
        
            <Button>
            <NavLink onClick={logout}>Logout</NavLink>
            </Button>
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