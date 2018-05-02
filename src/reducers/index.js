const initialState = {
  idCounter:0,
  toDoList: [],
  users:[],
  auth : {
  isAuthenticated: false,
},

admins:[{'id':1,
          'email':'djuza@djuza.com',
            'password':'djuza'},
          {'id':2,
          'email':'ivana@ivana.com',
            'password':'ivana'},
            {'id':1,
          'email':'rada@rada.com',
            'password':'rada'},
            ]

};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LIST":
      return Object.assign({},state, {toDoList:action.list});
      
    case "CHANGE_USERS":
      return Object.assign({},state, {users:action.list});
    
    case "ADD_TASK":
      return Object.assign({},state, {

      toDoList:[
	  ...state.toDoList,
	  action.task
      ]
  	}
  )

    case "IS_AUTH":
    return Object.assign({},state, {auth:{isAuthenticated:action.flag}});

    case "CHANGE_ID":
    return Object.assign({},state, {idCounter:action.id});


    default:
      return state;

}
};

export default rootReducer;