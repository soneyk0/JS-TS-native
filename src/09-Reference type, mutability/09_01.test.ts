function growAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: { tittle: string }
}


test('reference type test', () => {
    var user: UserType = {
        name: 'Yana',
        age: 23,
        address: {
            tittle: "Minsk"
        }
    }
    growAge(user)

    expect(user.age).toBe(24)

    const superman = user;
    superman.age = 1000
    expect(user.age).toBe(1000)
})

test('array reference test', () => {
    var users = [{
        name: 'Yana',
        age: 23
    },
        {
            name: 'Vova',
            age: 25
        }]

    var admin = users;
    admin.push({name: 'Ira', age: 35})

    expect(users[2]).toEqual({name: 'Ira', age: 35})


})

test('value type test', () => {
    let usersCount = 100

    let adminsCount = usersCount;
    adminsCount++

    expect(users[2]).toEqual({name: 'Ira', age: 35})

})

test('reference  test', () => {
    var user: UserType = {
        name: 'Yana',
        age: 23,
        address: {
            tittle: "Minsk"
        }
    }


    var user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    user2.address.tittle = 'Grodno'
    expect(user.address.tittle).toBe('Grodno')
})
test('reference type array test', () => {
    const address = {
        tittle: 'Minsk'
    }

var user: UserType = {
    name: 'Yana',
    age: 23,
    address: address

}


var user2: UserType = {
    name: 'Natasha',
    age: 30,
    address: address
}

const users = [user, user2, {
    name: 'Roma',
    age: 16, address:address}]

const admin=[user,user2]

    admin[0].name='Katy'
expect(users[0].name).toBe('Katy')
expect(user.name).toBe('Katy')
})