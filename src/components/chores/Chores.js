import React, { useContext, useState } from "react"
import { ChoreContext } from "./ChoresProvider"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import "./Chores.css"
import { EditChoreForm } from "./EditChoresForm"


export default (props) => {

    const { removeChore, updateChore } = useContext(ChoreContext)

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    const completedChore = () => {
            
        updateChore({
            id: props.chore.id,
            name: props.chore.name,
            description: props.chore.description,
            typeId: props.chore.typeId,
            isCompleted: true,
            userId: parseInt(localStorage.getItem("Chorez_customer"), 10)
        })

    }

    return (
        <>
        <div id="flex-container">
        <div id="chore-container">   
            <section color="info"className="card">
        <p className="chore__name">Name: {props.chore.name}</p>
        <div className="chores__description">Description: {props.chore.description}</div>
        <div className="chores__type">Type: {props.type.name}</div>
        <div className="chores__completed">Complete Chore: <input type="checkbox" id={ `chore--${props.chore.id}` }
        onClick={
            () => {
                completedChore()
            }}
            />
            </div>

        <br></br>
        <button className="edit_button" color="dark" onClick={() => {
            toggleEdit()
        }}>Edit</button>
        <button className="delete_button" color="danger" onClick={() => {
            removeChore(props.chore.id)
        }}>Delete</button>
                <Modal isOpen={editModal} toggle={toggleEdit}>
                    <ModalHeader toggle={toggleEdit}>
                        {props.chore.name}
                    </ModalHeader>
                    <ModalBody>
                        <EditChoreForm key={props.chore.id} toggleEdit={toggleEdit} chore={props.chore} />
                    </ModalBody>
                </Modal>
             </section>
                </div>
                    </div>
        </>
    )
}