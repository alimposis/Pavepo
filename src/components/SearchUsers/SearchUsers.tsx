import { useEffect, useState } from "react"
import { useGetAllUsersQuery } from "../../store/api/api"
import { useDispatch } from "react-redux"
import { addAllUsers } from "../../store/users/users.slice"

import { Input } from "../Input/Input"

export const SearchUsers = () =>{
    const [searchState,setSearchState] = useState<string|null>()
    const {data} = useGetAllUsersQuery(null)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(data && searchState){
            const filteredProducts = data.filter((e)=>{ return(e.username.trim().toLowerCase() === searchState.trim().toLowerCase() || e.email.trim().toLowerCase() === searchState.trim().toLowerCase())})
            dispatch(
                addAllUsers(filteredProducts)
            )
        }else if(setSearchState.length && data){
            dispatch(
                addAllUsers(data)
            )
        }
    },[searchState])
    return(
        <>
        <Input setSearchState={setSearchState}/>
        </>
    )
}