import React, { useContext, useState } from "react"
import { ChoreContext } from "./ChoresProvider"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
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
            <section className="chore">
        <h3 className="chore__name">Name: {props.chore.name}</h3>
        <div className="chores__description">Description: {props.chore.description}</div>
        <div className="chores__type">Type: {props.type.name}</div>
        <div className="chores__completed"></div> Completed: <input type="checkbox" className="" id={ `chore--${props.chore.id}` }
        onClick={
        () => {
            completedChore()
        }}
    />
            

        <br></br>
        <Button color="danger" onClick={() => {
            removeChore(props.chore.id)
        }}>Delete</Button>
                <Button color="info" onClick={() => {
                    toggleEdit()
                }}>Edit</Button>
                <Modal isOpen={editModal} toggle={toggleEdit}>
                    <ModalHeader toggle={toggleEdit}>
                        {props.chore.name}
                    </ModalHeader>
                    <ModalBody>
                        <EditChoreForm key={props.chore.id} toggleEdit={toggleEdit} chore={props.chore} />
                    </ModalBody>
                </Modal>
             </section>
        </>
    )
}