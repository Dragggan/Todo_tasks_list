
export const chngList = list => (
    { type: "CHANGE_LIST",
     list: list }
    );

export const chngUsers = list => (
    { type: "CHANGE_USERS",
     list: list }
    );

export const addTask = task => (
	{ type:"ADD_TASK",
  	task: task}
	);

export const isAuth=flag=>(
    {type:"IS_AUTH",
    flag:flag}
    )

export const chngId=id=>(
    {type:"CHANGE_ID",
    id:id}
    )

