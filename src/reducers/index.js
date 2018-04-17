

const initialState = {
  toDoList: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LIST":
    
      return Object.assign({},state, {toDoList:action.list});
    default:
      return state;
  }
};
export default rootReducer;