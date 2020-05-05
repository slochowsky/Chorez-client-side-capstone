import React, { useContext, useState } from "react"
import { ChoreContext } from "./ChoresProvider"
import { TypeContext } from "../types/TypeProvider"



export const EditChoreForm = ({ chore, toggleEdit }) => {
    const { types } = useContext(TypeContext)
    const { updateChore } = useContext(ChoreContext)

    const [ updatedChore, setChore ] = useState(chore)

    const handleControlledInputChange = (event) => {
        const newChore = Object.assign({}, updatedChore)
        newChore[event.target.name] = event.target.value
        setChore(newChore)
    }

    const editChore = () => {
        const typeId = parseInt(updatedChore.typeId)

        if (typeId === 0) {
            window.alert("Please select a chore type")
        } else {
            updateChore({
                id: updatedChore.id,
                name: updatedChore.name,
                description: updatedChore.description,
                isCompleted: false,
                typeId: typeId,
                userId: parseInt(localStorage.getItem("Chorez_customer"))

            })
                .then(toggleEdit)
        }
    }

    return (
        <form className="ChoreForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Chore name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Chore name"
                        defaultValue={chore.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Chore description: </label>
                    <input type="text" name="description" required className="form-control"
                        placeholder="chore description"
                        defaultValue={chore.description}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="typeId">Type: </label>
                    <select name="typeId" className="form-control"
                        defaultValue={chore.typeId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a type</option>
                        {types.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editChore()
                }}>
                Save Changes
            </button>
        </form>
    )
}