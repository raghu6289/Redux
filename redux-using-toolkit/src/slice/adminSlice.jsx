import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  admin: ""
}

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addAdmin: (state, action) => {
      state.admin = action.payload
    },
    clearAdmin: (state, action) => {
      state.admin = action.payload
    }

  }
})

export const { addAdmin, clearAdmin } = adminSlice.actions

export default adminSlice.reducer