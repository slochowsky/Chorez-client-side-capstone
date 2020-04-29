import React, { useState, useEffect } from "react"

export const ChoreContext = React.createContext()


/*
 This component establishes what data can be used.
 */
export const ChoresProvider = (props) => {
    // animals = data
    // setAnimals = function that React created, so we can use it to set state of animals
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

    /*
        Load all animals when the component is initialized. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
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
                chores, addChore
            }
        }>
            {props.children}
        </ChoreContext.Provider>
    )
}