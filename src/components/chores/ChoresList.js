import React, { useContext, useState, useEffect } from "react"
import { ChoreContext } from "./ChoresProvider"
import Chore from "./Chores"
import { TypeContext } from "../types/TypeProvider"
import { UsersContext } from "../users/UserProvider"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import ChoresForm from "./ChoresForm"


export default () => {
    // provider functions that can be accessed
    const { chores, filterTerm } = useContext(ChoreContext)
    const { types } = useContext(TypeContext)
    const { users } = useContext(UsersContext)
    
    // where these funtions live
    const [ filteredChores, setFilteredChores ] = useState([])
    
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    
    
    const userId = localStorage.getItem("Chorez_customer");
    const currentUser = users.filter(user => user.id === parseInt(userId));
    const usersChores = chores.filter(chore => chore.userId === parseInt(userId, 10));
    
    // When the user performs an action, and this component needs to do something in response to that action,
    // I use the Effect hook to define those responses.
    useEffect(() => {
        if (filterTerm !== 0) {
        const subset = chores.filter(c => c.typeId === filterTerm)
        const userSubset = subset.filter(s => s.userId === parseInt(userId))
        setFilteredChores(userSubset)
        } else {setFilteredChores(usersChores)}
    }, [chores, filterTerm])
    useEffect(() => {
        setFilteredChores(usersChores)
    }, [])

    return (
        <>
        <div className="userNameContainer">
            <h3 className="user_name">{currentUser.map(user => user.name)}'s Chores</h3>
        </div>

            <div className="fakeLink href" onClick={toggle}><button className="add_button"color="success">Add New Chore</button></div>
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
                    filteredChores.map(chore => {
                        if (chore.isCompleted === false) {const typeName = types.find(t => t.id === chore.typeId) || {}
                        
                        return <Chore key={chore.id}
                        type={typeName}
                        chore={chore} />}
                    }
                    )}
            </div>
        </>
    )
}