import axios from "axios";
import { useEffect, useState } from "react";

import { IProduct } from "../../models";
import { Pagination } from "../Pagination/Pagination";
import { Popup } from "../Popup/Popup";
import { WithLoadingError } from "./WithLoadingError";

import Loading from "./../../assets/gif/loading.gif"

export const DataFetcher = ({props}:{props: string | null | undefined}) =>{
    const [data, setData] = useState<null|IProduct[]>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null|string>(null);
    const [stateURL,setStateURL] = useState<null|string>(null)
    useEffect(()=>{
        setLoading(true)
        axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetParts?name=ORG10655&format=json`)
            .then((res)=>{
                console.log
                setData(res.data.Results)
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error)
                setLoading(false)
                setError("Извините, произошла ошибка")
            })
    },[props])
    useEffect(()=>{
        document.body.style.overflow = !stateURL ? 'auto' : 'hidden'
    },[stateURL])
    return(
        <>
        <WithLoadingError props={[loading,error,data,setStateURL]}/>
        {stateURL && <Popup props={[stateURL,setStateURL]}/>}
        </>
    )
}