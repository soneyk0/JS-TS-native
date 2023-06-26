
type UsersType={
    [key:string]: {id:number, name:string}
}

let users:UsersType
beforeEach(() => {
    users= {
        '10': {id: 10, name:"Yana"},
        '25': {id:25,name:"Sasha"},
        '56': {id:56,name:"Masha"},
        '58': {id:58, name:"Ira"}
    }
})

test('should select correst user', () => {

    users[1].name='Aleksander'
    expect(users['1'].name).toBe('Aleksander');


})

test('should delete user', () => {

    delete users[1]
    expect(users['1'].name).toBeUndefined();


})