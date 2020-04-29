import React from "react"

export default ({ chore, type }) => (
    <section className="chore">
        <h3 className="chore__name">Name: {chore.name}</h3>
        <div className="chores__description">Description: {chore.description}</div>
        <div className="chores__type">Type: {type.name}</div>
        <div className="chores__completed"></div> <span className="taskInfo">Chore Completed:</span>{" "}
        <input type="checkbox"
        />
    </section>
)