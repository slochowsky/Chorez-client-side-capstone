import React, { useState, useEffect } from "react"

export const ChoreContext = React.createContext()


/*
 This component establishes what data can be used.
 */
export const ChoresProvider = (props) => {
    const [chores, setChores] = useState([])

    const getChores = () => {
        return fetch("http://localhost:8088/chores")
            .then(res => res.json())
            .then(setChores)
    }

    const addChore = chore => {
        return fetch("http://localhost:8088/chores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chore)
        })
            .then(getChores)
    }
    const removeChore = choreId => {
        return fetch(`http://localhost:8088/chores/${choreId}`, {
            method: "DELETE"
        })
            .then(getChores)
    }
    const updateChore = chore => {
        return fetch(`http://localhost:8088/chores/${chore.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chore)
        })
            .then(getChores)
    }
    

    useEffect(
        () => {
            getChores()
        },
        []
    )

    /*
        Watching the state of chores, console.logs when the state has changed
    */
    useEffect(
        () => {
            console.log("**** CHORES APPLICATION STATE CHANGED  ****")
        },
        [chores]
    )


    return (
        <ChoreContext.Provider value={
            {
                chores, addChore, removeChore, updateChore
            }
        }>
            {props.children}
        </ChoreContext.Provider>
    )
}