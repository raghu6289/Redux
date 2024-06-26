import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  users: []
}


const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload]
    },
    deleteuser: (state, action) => {
      state.users = state.users.filter((user, index) => index != action.payload)
    }
  }
})


export const { addUser, deleteuser } = userSlice.actions

export default userSlice.reducer