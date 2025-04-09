import { useEffect, useState } from "react"

import { useDebounce } from "../../hooks/useDebounce"
import { Input } from "./Input/Input"

export const SearchProducts = ({props}:{props: React.Dispatch<React.SetStateAction<string | null | undefined>>}) =>{
    const [inputState,setInputState] = useState<string|undefined>()
    const setSearchState = props
    const debouncedValue = useDebounce(inputState);
    useEffect(()=>{
        setSearchState(debouncedValue)
    },[debouncedValue])
    return(
        <>
        <Input props={setInputState}/>
        </>
    )
}