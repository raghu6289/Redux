
const initialState = [];

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "DEL_USER":
      return state.filter((user, index) => index != action.payload)
    default:
      return state;
  }
};


export const adminReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_ADMIN":
      return state = action.payload;
    case "CLEAR_ADMIN":
      return state = action.payload
    default:
      return state;
  }
};