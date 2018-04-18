//akcija je bukvalno funkcija koja vraca podatak i uputstvo sta snjim da se uradi kroz ovaj type

export const chngList = list => (
    { type: "CHANGE_LIST",
     list: list }
    );

export const chngUsers = list => (
    { type: "CHANGE_USERS",
     list: list }
    );