export const addUser = (users) => (
  {
    type: "ADD_USER",
    payload: users
  });

export const delUser = (index) => ({
  type: "DEL_USER",
  payload: index
});


export const addAdmin = (adminName) => ({
  type: "ADD_ADMIN",
  payload: adminName
})

export const ClearAdmin = (clear) => ({
  type: "CLEAR_ADMIN",
  payload: clear
})