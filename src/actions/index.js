//this action changes todo list
export const chngList = list => (
    { type: "CHANGE_LIST",
     list: list }
    );

//this action changes users list
export const chngUsers = list => (
    { type: "CHANGE_USERS",
     list: list }
    );

//this action adds task to todo list
export const addTask = task => (
	{ type:"ADD_TASK",
  	task: task}
	);

//this action controls whether admin is logged in
export const isAuth=flag=>(
    {type:"IS_AUTH",
    flag:flag}
    )

//this action counts total number of tasks (including deleted)
export const chngId=id=>(
    {type:"CHANGE_ID",
    id:id}
    )

