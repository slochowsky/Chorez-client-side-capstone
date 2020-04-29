import React from "react"
import { ChoresProvider } from "./chores/ChoresProvider"
import { TypesProvider } from "./types/TypeProvider"
import ChoresList from "./chores/ChoresList"
import { UsersProvider } from "./users/UserProvider"




export default (props) => {

    return (
        <>
            <h1>Chorez</h1>
            <UsersProvider>
            <TypesProvider>
                <ChoresProvider>
                <ChoresList />
            </ChoresProvider>
            </TypesProvider>
            </UsersProvider>
            
        </>
    )
}