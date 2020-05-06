import React, { useContext, useRef } from "react"
import { ChoreContext } from "./ChoresProvider"
import { TypeContext } from "../types/TypeProvider"

export default props => {
    const { addChore } = useContext(ChoreContext)
    const { types } = useContext(TypeContext)

// useRef is reacts way of saying i need to get something from the dom, 
// reference to an element on the dom
    const name = useRef()
    const description= useRef()
    const type = useRef()

    const constructNewChore = () => {
        const typeId = parseInt(type.current.value)

        if (typeId === 0) {
            window.alert("Please select a type")
        } else {
            addChore({
                name: name.current.value,
                description: description.current.value,
                isCompleted: false,
                typeId: typeId,
                userId: parseInt(localStorage.getItem("Chorez_customer"))
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="choreForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="choreName">Name: </label>
                    <input
                        type="text"
                        id="choreemployeeName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Chore name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeDescription">Description </label>
                    <input
                        type="text"
                        id="choreDescription"
                        ref={description}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Chore description"
                />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="type">Assign a Type: </label>
                    <select
                        defaultValue=""
                        name="type"
                        ref={type}
                        id="type"
                        className="form-control"
                    >
                        <option value="0">Select a type</option>
                        {types.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewChore((parseInt(type.current.value)))
                    }
                }
                className="btn btn-primary">
                Save Chore
            </button>
        </form>
    )
}