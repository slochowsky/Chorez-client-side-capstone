import React, { useContext, useState } from "react"
import { ChoreContext } from "./ChoresProvider"
import Chore from "./Chores"
import { TypeContext } from "../types/TypeProvider"
import { UsersContext } from "../users/UserProvider"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import ChoresForm from "./ChoresForm"




export default () => {
    const { chores } = useContext(ChoreContext)
    const { types } = useContext(TypeContext)
    const { users } = useContext(UsersContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)


    const userId = localStorage.getItem("Chorez_customer");
    const currentUser = users.filter(user => user.id === parseInt(userId));
    const usersChores = chores.filter(chore => chore.userId === parseInt(userId, 10));

    return (
        <>
            <h3 className="user_name">{currentUser.map(user => user.name)}'s Chores</h3>

            <div className="fakeLink href" onClick={toggle}><Button color="success">Add New Chore</Button></div>
        <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Add Chore
                </ModalHeader>
                <ModalBody>
                    <ChoresForm toggler={toggle} />
                </ModalBody>
            </Modal>

            <div className="chores">
                {
                    usersChores.map(chore => {
                        if (chore.isCompleted === false ) {const typeName = types.find(t => t.id === chore.typeId) || {}
                        
                        return <Chore key={chore.id}
                        type={typeName}
                        chore={chore} />}
                    }
                    )}
            </div>
        </>
    )
}