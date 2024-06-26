import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addUser, addAdmin } from "../Redux/action"

function CreateUsers() {

  const dispatch = useDispatch()

  const [users, setUsers] = useState({
    name: "",
    age: "",
    email: "",
    contact: ""
  })

  const [adminName, setAdminName] = useState("")

  const handleUsers = (e) => {
    const { name, value } = e.target
    setUsers((users) => {
      return {
        ...users, [name]: value
      }
    })
  }

  const addUsers = (e) => {
    e.preventDefault();
    dispatch(addUser(users))
    setUsers({
      name: "",
      age: "",
      email: "",
      contact: ""
    })
  }


  const AddAdminHandler = () => {
    dispatch(addAdmin(adminName))
    setAdminName("")
  }

  return (
    <div>
      <h1>Redux using old Ways</h1>
      CreateUsers
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name='name'
          value={users.name}
          onChange={handleUsers} />
        <label htmlFor="age">Age: </label>
        <input type="number" name='age' value={users.age} onChange={handleUsers} />
        <label htmlFor="email">E-Mail: </label>
        <input type="text" name='email' value={users.email} onChange={handleUsers} />
        <label htmlFor="contact">Contact: </label>
        <input type="number" name='contact' value={users.contact} onChange={handleUsers} />
        <button
          type="button"
          style={{ width: '170px', marginTop: '15px' }}
          onClick={addUsers}
        >
          Add
        </button>
      </form>

      <h3>Enter Admin Name: <input type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} /> <button onClick={() => AddAdminHandler()}>Enter</button></h3>

    </div>
  )
}

export default CreateUsers