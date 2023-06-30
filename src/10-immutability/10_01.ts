export type UserType = {
    name: string,
    hair: number,
    address: { city: string, house:number }

}

export type UserLaptop={
    title:string
}

export type UserWithLaptop= UserType & {
    laptop:UserLaptop
}

export type UserWithBooks= UserType & {
    books:Array<string>
}
type CompanyType={id:number, title:string}
export type UserWithCompanies= {
    companies:Array<CompanyType>
}

export function makeHairStyle(u: UserType,power:number) {
    const copy ={...u,hair:u.hair / power}
    //copy.hair = u.hair / power

    return copy
}

export function moveUser(u: UserWithLaptop,city:string) {
    const copy ={...u,address:{...u.address,city:city}}

    // copy.address={...copy.address,city:city}

    return copy
}

export function moveUserToOtherHouse(u: UserWithLaptop & UserWithBooks,house:number) {
    const copy ={...u,address:{...u.address,house:house}}

    // copy.address={...copy.address,city:city}

    return copy
}

export function upgradeUserLaptop(u: UserWithLaptop,title:string) {
    const copy ={...u,laptop:{...u.laptop,title:title}}

    // copy.address={...copy.address,city:city}

    return copy
}

export function addNewBookToUser(u: UserWithLaptop & UserWithBooks,newBook:string) {
    const copy ={...u,books:[...u.books,newBook]}

    // copy.address={...copy.address,city:city}

    return copy
}

export function updateBook(u: UserWithLaptop & UserWithBooks, oldBook:string,newBook:string) {
    const copy ={...u,books:u.books.map(b=> b===oldBook ? newBook : b)}

    return copy
}

export function removeBook(u: UserWithLaptop & UserWithBooks, deleteBook:string) {
    const copy ={...u,books:u.books.filter(b=>b!==deleteBook)}

    return copy
}


export function updateCompany(u: UserWithLaptop & UserWithCompanies, companyId:number,newTitle:string) {
    const copy ={...u,companies:u.companies.map(c=>c.id===companyId ? {...c,title:newTitle}:c)}

    return copy
}

export const updateCompaniesTitle=(companies:{[key:string]:Array<CompanyType>},
                                   userName:string, companyId:number, newTitle:string)=>{

    let companyCopy={...companies}
    companyCopy[userName]=companyCopy[userName].map(c=>c.id===companyId ?{...c,title: newTitle} :c)

    return companyCopy
}


