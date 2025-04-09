import { useEffect, useState } from "react"

import { IProduct } from "../../models"
import { Container } from "../Container/Container"
import { Button } from "../Button/Button"

export const Pagination = ({props}:{props:[IProduct[],React.Dispatch<React.SetStateAction<string | null>>]}) =>{
    const [statePagination,setStatePagination] = useState(50)
    const [stateProducts,setStateProducts] = useState<IProduct[]|null>(null)
    useEffect(()=>{
        setStateProducts(props[0].slice(0,statePagination))
    },[statePagination])
    function paginationAdd() {
        setStatePagination(statePagination+50)
    }
    return(
        <>
        {stateProducts && <Container props={[stateProducts,props[1]]}/>}
        <Button props={["Далее",paginationAdd]}/>
        </>
    )
}
