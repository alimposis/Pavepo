export interface IUser{
    id:number
    name:string
    username:number
    email:string
    address:IUserAdress
    phone:string
    website:string
    company:ICompany
}

interface IUserAdress{
    street:string
    suite:string
    city:string
    zipcode:string
    geo:IGeo
}

interface IGeo{
    lat:string
    lng:string
}

interface ICompany{
    name:string
    catchPhrase:string
    bs:string
}