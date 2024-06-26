import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delUser, ClearAdmin } from "../Redux/action"

function ShowUsers() {

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userInfo)
  const AdminDetails = useSelector((state) => state.adminInfo)

  console.log("ShowUsers: ", userDetails);

  const handledeleteuser = (index) => {
    dispatch(delUser(index))
  }

  return (
    <div>
      ShowUsers
      <h2>Admin Name: {AdminDetails}</h2>
      {
        AdminDetails == "" ? "" : <button onClick={() => dispatch(ClearAdmin(""))}>Clear</button>
      }

      {
        userDetails.map((user, index) => {
          return (
            <div key={index}>
              <h1>{user.name}</h1>
              <h2>{user.age}</h2>
              <h2>{user.email}</h2>
              <h2>{user.contact}</h2>
              <button onClick={() => handledeleteuser(index)}>remove</button>
            </div>
          )
        })}
    </div>
  )
}

export default ShowUsers