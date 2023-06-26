

export const usersObj= {
    '0': "Yana",
    '1': "Sasha",
    '2': "Masha",
    '3': "Ira"
}

type usersType={
[key:string]: {id:number, name:string}
}

export const users:usersType= {
    '10': {id: 10, name:"Yana"},
    '25': {id:25,name:"Sasha"},
    '56': {id:56,name:"Masha"},
    '58': {id:58, name:"Ira"}
}

var user={id:10500, name:'Igor'}
users[user.id]=user;
delete users[user.id]
users[user.id].name='Misha'

export const usersArray=[
    {id: 10, name:"Yana"},
    {id:25,name:"Sasha"},
    {id:56,name:"Masha"},
    {id:58, name:"Ira"}
]

// usersArray.fins(u=>u.id===1)
// var userCopy=[...usersArray.filter(),user]
