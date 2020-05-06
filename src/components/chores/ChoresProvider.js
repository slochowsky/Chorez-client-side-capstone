import React, { useState, useEffect } from "react"

export const ChoreContext = React.createContext()


/*
 This component establishes what data can be used.
 */
export const ChoresProvider = (props) => {
    // anytime setChores is ran it updates chores varible.
    const [chores, setChores] = useState([])
    // on page load set chores to empty array at first.
    const [filterTerm, setFilterTerm] = useState(0)

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
    
// infinite loop if not set to empty array
    useEffect(
        () => {
            getChores()
        },
        []
    )

// first hook runs on page load and get all chores, and the second hook we want to use whenever chores varible changes.
    useEffect(
        () => {
            console.log("**** CHORES APPLICATION STATE CHANGED  ****")
        },
        [chores]
    )


    return (
        <ChoreContext.Provider value={
            {
                chores, addChore, removeChore, updateChore, setFilterTerm, filterTerm
            }
        }>
            {props.children}
        </ChoreContext.Provider>
    )
}