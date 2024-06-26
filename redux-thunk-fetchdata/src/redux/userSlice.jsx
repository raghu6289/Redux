import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const fetchUsers = createAsyncThunk('gets/getUsers', () => {
  return axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
    return res.data
  })
})


const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
    })

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
    })
  }
})


export default userSlice.reducer

