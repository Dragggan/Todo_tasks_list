//reduceri su funkcije koje menjaju state tako sto od akcije dobija podatak i uputsvo sta s
// njim treba da se uradi

const initialState = {
  idCounter:0,
  toDoList: [],
  users:[],
  auth : {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
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
      
    case "CHANGE_USER":
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