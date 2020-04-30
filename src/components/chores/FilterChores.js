import React, { useContext, useRef, useState } from 'react'
import { TypeContext } from '../types/TypeProvider'
import { ChoreContext } from './ChoresProvider'

export const FilterByType = () => {

    const { types } = useContext(TypeContext)
    const { chore } = useContext(ChoreContext)
    const type = useRef()

    const [ updatedChore, setChore ] = useState(chore)

    const handleControlledInputChange = (event) => {
        // Create a new copy of the animal being edited
        const newChore = Object.assign({}, updatedChore)

        // Change the property value on the copy
        newChore[event.target.name] = event.target.value

        // Set the copy as the new state
        setChore(newChore)
    }

    return (
        <div className="filterTypes">
            <label htmlFor="type">Filter By Type: </label>
            <select defaultValue=""
                name="type"
                ref={type}
                id="choreType"
                className="form-control">
                onChange={handleControlledInputChange}
                <option value="0">Select a type</option>
                {types.map(e => (
                    <option key={e.id} value={e.id}>
                        {e.name}
                    </option>
                ))}
            </select>
        </div>
    )
}
