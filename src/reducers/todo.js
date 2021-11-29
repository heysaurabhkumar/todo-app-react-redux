const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "DELETE_TASK":
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
};

export default todoReducer;
