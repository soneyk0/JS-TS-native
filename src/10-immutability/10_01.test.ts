import {
    addNewBookToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompaniesTitle, updateCompany,
    upgradeUserLaptop,
    UserType,
    UserWithBooks, UserWithCompanies,
    UserWithLaptop
} from "./10_01";


test('reference type test', () => {
    let user: UserType = {
        name: 'Yana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        }
    }
    const awesomeUser = makeHairStyle(user, 2)
    expect(awesomeUser.hair).toBe(11)
    expect(user.hair).toBe(22)
})


test('change address type test', () => {
    let user: UserWithLaptop = {
        name: 'Yana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }
    const movedUser = moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')

})


test('upgrade laptop to macbook', () => {
    let user: UserWithLaptop = {
        name: 'Yana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }
    const userCopy = upgradeUserLaptop(user, 'Macbook')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Zenbook')

})

test('upgrade house', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: 'Yana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'js', 'html', 'react']
    }
    const userCopy = moveUserToOtherHouse(user, 99)


    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)

})

test('add new books to user', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: 'Yana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'js', 'html', 'react']
    }
    const userCopy = addNewBookToUser(user, 'ts')


    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')


})

test('update js to ts', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: 'Yana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'js', 'html', 'react']
    }
    const userCopy = updateBook(user, 'js', 'ts')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[1]).toBe('ts')


})

test('remove js book', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: 'Yana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'js', 'html', 'react']
    }
    const userCopy = removeBook(user, 'js')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[1]).toBe('html')


})


test('remove copanies', () => {
    let user: UserWithLaptop & UserWithCompanies = {
        name: 'Yana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-Incubator'}]
    }
    const userCopy = updateCompany(user, 1, 'Epam')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('Epam')


})

test('copanies', () => {
    let companies = {
        'Dimych': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-Incubator'}],
        'Artem': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-Incubator'}]
    }

    const copy = updateCompaniesTitle(companies, 'Dimych', 1, 'Epam')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('Epam')

})