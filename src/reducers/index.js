//reduceri su funkcije koje menjaju state tako sto od akcije dobija podatak i uputsvo sta s njim treba da se uradi

const initialState = {
  toDoList: []
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LIST":
      return Object.assign({},state, {toDoList:action.list});
      
    case "CHANGE_USER":
      return Object.assign({},state, {users:action.list});
    
    default:
      return state;

}
  
};
export default rootReducer;