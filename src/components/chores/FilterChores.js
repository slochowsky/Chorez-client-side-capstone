import React, { useContext, useRef } from 'react'
import { TypeContext } from '../types/TypeProvider'
import { ChoreContext } from './ChoresProvider'


export const FilterByType = () => {

    const { types } = useContext(TypeContext)
    const { setFilterTerm } = useContext(ChoreContext)

    const type = useRef()

    return (
        <div className="filterTypes">
            <label htmlFor="type">Filter By Type: </label>
            <select defaultValue=""
                name="type"
                ref={type}
                id="choreType"
                onChange={e => setFilterTerm(parseInt(type.current.value))}
                className="form-control">
                <option value="0">Show All Chores</option>
                {types.map(e => (
                    <option key={e.id} value={e.id}>
                        {e.name}
                    </option>
                ))}
            </select>
        </div>
    )
}
