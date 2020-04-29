import React, { useState, useEffect } from "react"

export const TypeContext = React.createContext()


/*
 This component establishes what data can be used.
 */
export const TypesProvider = (props) => {
    const [types, setTypes] = useState([])

    const getTypes = () => {
        return fetch("http://localhost:8088/types")
            .then(res => res.json())
            .then(setTypes)
    }


    useEffect(
        () => {
            getTypes()
        },
        []
    )

    /*
        Watching the state of chores, console.logs when the state has changed
    */
    useEffect(
        () => {
            console.log("**** Types APPLICATION STATE CHANGED  ****")
        },
        [types]
    )


    return (
        <TypeContext.Provider value={
            {
                types
            }
        }>
            {props.children}
        </TypeContext.Provider>
    )
}